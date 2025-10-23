
import { initLogin } from "./scripts/login.js";
import { initRecover } from "./scripts/recover.js";
import { initProjects } from "./scripts/project.js";
import { initDetailProject } from "./scripts/projectDetail.js";
import { initAdmin } from "./scripts/admin.js";

const route = window.location.pathname;

if (route.includes("login.html")) initLogin();
if (route.includes("recover-password.html")) initRecover();
if (route.includes("project.html")) initProjects();
if (route.includes("project-detail.html")) initDetailProject();
if (route.includes("admin.html")) initAdmin();

if (route.includes("index.html") || route === "/") {
  console.log("Bienvenida a StudentsRepo");
}
