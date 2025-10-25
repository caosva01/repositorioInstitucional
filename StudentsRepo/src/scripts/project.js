document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.buscador input[type="text"]');
  const btnNewProject = document.querySelector("#btnNewProject");
  let proyectos = [];

  // Cargar proyectos desde JSON
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

  // Botón Subir Proyecto
  if (btnNewProject) {
    btnNewProject.addEventListener("click", () => {
      alert(" Función para subir proyectos próximamente disponible ");
    });
  }
});
