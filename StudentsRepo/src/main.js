
import {initLogin} from "./scripts/login.js";
import {initAdmin} from "./scripts/admin.js";
import {initProyectos} from "./scripts/proyecto.js";
import {initDetalleProyecto} from "./scripts/detalleProyecto.js";
import {initRecover} from "./scripts/recover.js";


const ruta = window.location.pathname;


if (ruta.includes("login.html")) {
  initLogin();
}

if (ruta.includes("admin.html")) {
  initAdmin();
}

if (ruta.includes("proyecto.html")) {
  initProyectos();
}

if (ruta.includes("detalle-proyecto.html")) {
  initDetalleProyecto();
}

if (ruta.includes("recover-password.html")) {
  initRecover();
}

if (ruta.includes("index.html")) {
  console.log("Bienvenido a StudentsRepo");
}