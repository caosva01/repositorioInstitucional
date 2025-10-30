
// src/scripts/main.js
import { initLogin } from "./pages/login.js";
import { initRecover } from "./pages/recover.js";
import { initProjects } from "./pages/project.js";
import { initDetailProject } from "./pages/projectDetail.js";
import { initAdmin } from "./pages/admin.js";

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.id;

  switch (page) {
    case "loginPage":
      initLogin();
      break;

    case "recoverPage":
      initRecover();
      break;

    case "projectPage":
      initProjects();
      break;

    case "projectDetailPage":
      initDetailProject();
      break;

    case "adminPage":
      initAdmin();
      break;

    case "indexPage":
      console.log("Bienvenida a StudentsRepo (Inicio)");
      break;

    case "helpPage":
      console.log("Página de ayuda");
      break;

    default:
      console.log("Página no identificada o sin función JS específica.");
  }
});
