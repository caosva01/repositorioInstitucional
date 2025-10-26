document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.buscador input[type="text"]');
  const btnNewProject = document.querySelector("#btnNewProject");
  const modal = document.querySelector("#modalNewProject");
  const closeModal = document.querySelector("#closeModal");
  const form = document.querySelector("#newProjectForm");
  let proyectos = [];

  //  Cargar proyectos desde JSON
  fetch("../src/assets/data/sample-data.json")
    .then(res => res.json())
    .then(data => {
      proyectos = data;
      console.log("Proyectos cargados:", proyectos);
    })
    .catch(() => {
      console.error("No se pudieron cargar los proyectos.");
    });

  // Filtrar proyectos por texto
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const texto = searchInput.value.toLowerCase();
      const filtrados = proyectos.filter(p =>
        p.titulo.toLowerCase().includes(texto) ||
        p.autor.toLowerCase().includes(texto)
      );
      console.log("Proyectos filtrados:", filtrados);
    });
  }

  //  Abrir modal al hacer clic en “Subir Proyecto”
  if (btnNewProject && modal) {
    btnNewProject.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  }

  //  Cerrar modal al hacer clic en la X
  if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  //  Cerrar modal al hacer clic fuera del cuadro blanco
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }

  //  Enviar formulario de nuevo proyecto
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nuevo = {
        id: Date.now(),
        titulo: document.querySelector("#titleInput").value.trim(),
        autor: document.querySelector("#authorInput").value.trim(),
        area: document.querySelector("#areaInput").value,
        descripcion: document.querySelector("#descriptionInput").value.trim()
      };

      if (!nuevo.titulo || !nuevo.autor || !nuevo.descripcion || !nuevo.area) {
        alert("Por favor completa todos los campos.");
        return;
      }

      console.log("Nuevo proyecto guardado:", nuevo);
      alert(" Proyecto guardado correctamente");
      form.reset();
      modal.classList.add("hidden");
    });
  }
});