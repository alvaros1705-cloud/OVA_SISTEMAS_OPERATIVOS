/* SCORM 1.2 bridge for OVA Sistemas Operativos.
 * The wrapper owns the LMS session while the OVA itself runs in a same-origin iframe.
 */
(function () {
  "use strict";

  const frame = document.getElementById("ova-content");
  const notice = document.getElementById("scorm-notice");
  const startedAt = Date.now();
  const STORAGE_KEYS = [
    "ovaRespuestas",
    "ovaRecursosVisitados",
    "ovaUnidadActiva",
    "ovaIdioma",
    "ovaTema",
    "ovaEstudiante"
  ];

  let api = null;
  let connected = false;
  let finished = false;
  let courseCompleted = false;

  function showNotice(message) {
    notice.textContent = message;
    notice.hidden = false;
  }

  function call(method, args) {
    if (!api || typeof api[method] !== "function") return "";
    try {
      return api[method].apply(api, args || []);
    } catch (error) {
      return "";
    }
  }

  function findAPI(startWindow) {
    let current = startWindow;
    for (let depth = 0; current && depth < 20; depth += 1) {
      try {
        if (current.API && typeof current.API.LMSInitialize === "function") {
          return current.API;
        }
        if (current.parent === current) break;
        current = current.parent;
      } catch (error) {
        break;
      }
    }

    try {
      if (window.opener && window.opener.API &&
          typeof window.opener.API.LMSInitialize === "function") {
        return window.opener.API;
      }
    } catch (error) {}
    return null;
  }

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function restoreSuspendData(raw) {
    if (!raw) return false;
    try {
      const state = JSON.parse(raw);
      if (!state || state.v !== 1) return false;

      if (state.r && typeof state.r === "object") {
        const answers = {};
        Object.keys(state.r).forEach((cut) => {
          const entries = state.r[cut];
          answers[cut] = {};
          if (Array.isArray(entries)) {
            entries.forEach((entry) => {
              if (Array.isArray(entry) && entry.length >= 2) {
                answers[cut][String(entry[0])] = String(entry[1]);
              }
            });
          } else if (entries && typeof entries === "object") {
            Object.keys(entries).forEach((id) => {
              answers[cut][id] = String(entries[id]);
            });
          }
        });
        localStorage.setItem("ovaRespuestas", JSON.stringify(answers));
      }

      if (Array.isArray(state.vst)) {
        localStorage.setItem("ovaRecursosVisitados", JSON.stringify(state.vst));
      }
      if (state.u !== undefined) localStorage.setItem("ovaUnidadActiva", String(state.u));
      if (state.l === "es" || state.l === "en") localStorage.setItem("ovaIdioma", state.l);
      if (state.t === "light" || state.t === "dark") localStorage.setItem("ovaTema", state.t);

      if (state.student && typeof state.student === "string" && state.student.trim()) {
        localStorage.setItem("ovaEstudiante", JSON.stringify({
          nombre: state.student.trim(),
          invitado: false
        }));
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  function compactSuspendData() {
    const answers = readJSON("ovaRespuestas", {});
    const compactAnswers = {};
    Object.keys(answers || {}).forEach((cut) => {
      const values = answers[cut] || {};
      compactAnswers[cut] = Object.keys(values).map((id) => [
        Number(id),
        String(values[id])
      ]);
    });

    const student = readJSON("ovaEstudiante", null);
    const state = {
      v: 1,
      r: compactAnswers,
      vst: readJSON("ovaRecursosVisitados", []),
      u: localStorage.getItem("ovaUnidadActiva") || "0",
      l: localStorage.getItem("ovaIdioma") || "es",
      t: localStorage.getItem("ovaTema") || "light",
      student: student && !student.invitado ? student.nombre : ""
    };

    let serialized = JSON.stringify(state);
    if (serialized.length > 4000) {
      state.vst = [];
      serialized = JSON.stringify(state);
    }
    if (serialized.length > 4000) {
      state.student = "";
      serialized = JSON.stringify(state);
    }
    if (serialized.length > 4096) {
      // Retain responses first: they are the essential assessment record.
      return JSON.stringify({ v: 1, r: compactAnswers, u: state.u, l: state.l, t: state.t });
    }
    return serialized;
  }

  function formatSessionTime(milliseconds) {
    const totalSeconds = Math.max(0, milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = (totalSeconds % 60).toFixed(2).padStart(5, "0");
    return String(hours).padStart(4, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" + seconds;
  }

  function setValue(name, value) {
    return call("LMSSetValue", [name, String(value)]);
  }

  function commit() {
    if (!connected || finished) return;
    call("LMSCommit", [""]);
  }

  function applyProgress(data) {
    if (!connected || !data) return;

    const total = Math.max(0, Number(data.total) || 0);
    const responded = Math.max(0, Number(data.respondidas) || 0);
    const correct = Math.max(0, Number(data.aciertos) || 0);
    const score = Math.max(0, Math.min(100, Number(data.porcentaje) || 0));
    const completed = Boolean(data.completado) && total > 0 && responded >= total;

    courseCompleted = completed;
    setValue("cmi.core.score.min", "0");
    setValue("cmi.core.score.max", "100");
    setValue("cmi.core.score.raw", score);
    setValue("cmi.core.lesson_location", "unidad-" + String(data.unidad || 1).padStart(2, "0"));
    setValue("cmi.core.lesson_status", completed ? "completed" : "incomplete");
    setValue("cmi.suspend_data", compactSuspendData());
    setValue("cmi.core.exit", completed ? "normal" : "suspend");
    commit();

    document.documentElement.dataset.scormConnected = "true";
    document.documentElement.dataset.scormCompleted = String(completed);
    document.documentElement.dataset.scormScore = String(score);
    document.documentElement.dataset.scormAnswered = String(responded);
    document.documentElement.dataset.scormTotal = String(total);
    document.documentElement.dataset.scormCorrect = String(correct);
  }

  function initializeLMS() {
    api = findAPI(window.parent);
    if (!api) {
      showNotice("El OVA está abierto fuera de Moodle. El contenido funciona, pero el seguimiento SCORM se activará al iniciarlo desde una actividad SCORM de Moodle.");
      return;
    }

    const result = call("LMSInitialize", [""]);
    if (String(result).toLowerCase() !== "true") {
      const errorCode = call("LMSGetLastError", []);
      const detail = call("LMSGetErrorString", [errorCode]);
      showNotice("No se pudo iniciar el seguimiento SCORM de Moodle. " +
        (detail ? String(detail) : "Código: " + String(errorCode || "desconocido")));
      return;
    }

    connected = true;
    const status = String(call("LMSGetValue", ["cmi.core.lesson_status"]) || "");
    const saved = String(call("LMSGetValue", ["cmi.suspend_data"]) || "");

    if (!restoreSuspendData(saved) && status === "not attempted") {
      STORAGE_KEYS.forEach((key) => {
        try { localStorage.removeItem(key); } catch (error) {}
      });
    }

    const lmsStudent = String(call("LMSGetValue", ["cmi.core.student_name"]) || "").trim();
    if (lmsStudent && !localStorage.getItem("ovaEstudiante")) {
      try {
        localStorage.setItem("ovaEstudiante", JSON.stringify({
          nombre: lmsStudent,
          invitado: false
        }));
      } catch (error) {}
    }

    if (!["completed", "passed", "failed"].includes(status)) {
      setValue("cmi.core.lesson_status", "incomplete");
    }
    call("LMSCommit", [""]);
    document.documentElement.dataset.scormConnected = "true";
  }

  window.addEventListener("message", function (event) {
    if (event.origin !== window.location.origin) return;
    if (event.source !== frame.contentWindow) return;
    if (!event.data || event.data.type !== "OVA_SCORM_PROGRESS") return;
    applyProgress(event.data.payload || {});
  });

  function finishLMS() {
    if (!connected || finished) return;
    finished = true;
    setValue("cmi.core.session_time", formatSessionTime(Date.now() - startedAt));
    setValue("cmi.core.exit", courseCompleted ? "normal" : "suspend");
    call("LMSCommit", [""]);
    call("LMSFinish", [""]);
  }

  window.addEventListener("pagehide", finishLMS);
  window.addEventListener("beforeunload", finishLMS);

  // Restore learner state before the OVA portal starts reading localStorage.
  initializeLMS();
  frame.src = "index.html";
})();
