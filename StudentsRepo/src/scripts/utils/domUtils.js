// src/scripts/domUtils.js
// Funciones auxiliares para manipular el DOM de forma reutilizable

// Crear un elemento con clases y contenido opcional
export function createElement(tag, className = "", content = "") {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
}

// Vaciar el contenido de un contenedor
export function clearContainer(container) {
  if (container) container.innerHTML = "";
}

// Mostrar un mensaje temporal en pantalla
export function showMessage(message, type = "info") {
  const colors = {
    info: "bg-blue-100 text-blue-800 border-blue-300",
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
  };

  const msgBox = document.createElement("div");
  msgBox.className = `fixed top-4 right-4 px-4 py-2 rounded border shadow-lg z-50 ${colors[type]}`;
  msgBox.textContent = message;
  document.body.appendChild(msgBox);

  setTimeout(() => msgBox.remove(), 2500);
}

// Crear una fila para tabla (ejemplo: para admin)
export function createTableRow(cells = []) {
  const tr = document.createElement("tr");
  tr.className = "border-b hover:bg-gray-50";
  cells.forEach((cell) => {
    const td = document.createElement("td");
    td.className = "p-3";
    td.innerHTML = cell;
    tr.appendChild(td);
  });
  return tr;
}
