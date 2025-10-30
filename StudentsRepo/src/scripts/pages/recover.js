// src/scripts/pages/recover.js
// Maneja el formulario de recuperación de contraseña
// Funciona localmente y luego puede conectarse a MockAPI

import { $, showMessage } from "../utils/domUtils.js";

export function initRecover() {
  const form = $("#recoverForm");
  const emailInput = $("#emailRecover");
  const message = $("#recoverMessage");

  if (!form) {
    console.warn("No se encontró #recoverForm en la página.");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "";

    const correo = emailInput.value.trim();

    if (!correo.endsWith("@cesde.net")) {
      alert("Debe ingresar un correo institucional (@cesde.net)");
      return;
    }

    try {
      // 🔹 Simulación local de envío de código
      const token = Math.random().toString(36).substring(2, 8).toUpperCase();

      // Mostrar mensaje visual
      showMessage("#recoverMessage", `Código enviado a ${correo}: ${token}`, "green");

      // 🔹 Cuando MockAPI esté lista, reemplaza esta parte por una llamada real
      /*
      await apiFetch('/recover', {
        method: 'POST',
        body: JSON.stringify({ email: correo }),
      });
      */

    } catch (err) {
      showMessage("#recoverMessage", "Error al enviar el código. Intenta nuevamente.", "red");
      console.error("Error en recuperación:", err);
    }
  });
}
