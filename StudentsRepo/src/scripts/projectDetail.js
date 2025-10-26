document.addEventListener("DOMContentLoaded", () => {
      const botonesVer = document.querySelectorAll(".verDetalle");
      const detalle = document.querySelector("#detalleProyecto");
      const lista = document.querySelector("#projectList");
      const volver = document.querySelector("#volverBtn");

      const titulo = document.querySelector("#detalleTitulo");
      const autor = document.querySelector("#detalleAutor");
      const area = document.querySelector("#detalleArea");
      const ano = document.querySelector("#detalleAno");
      const descripcion = document.querySelector("#detalleDescripcion");
      const etiquetas = document.querySelector("#detalleEtiquetas");
      const imagen = document.querySelector("#detalleImagen");
      const archivo = document.querySelector("#detalleArchivo");
      const descargar = document.querySelector("#descargarBtn");

      botonesVer.forEach(btn => {
        btn.addEventListener("click", () => {
          // Obtener los datos del proyecto
          titulo.textContent = btn.dataset.titulo;
          autor.textContent = btn.dataset.autor;
          area.textContent = btn.dataset.area;
          ano.textContent = btn.dataset.ano;
          descripcion.textContent = btn.dataset.descripcion;
          imagen.src = btn.dataset.imagen;
          imagen.style.width = "250px";
imagen.style.height = "auto";
imagen.style.objectFit = "contain";
imagen.style.margin = "0 auto";
imagen.style.display = "block";

          archivo.textContent = `"${btn.dataset.archivo}"`;

          etiquetas.innerHTML = "";
          btn.dataset.etiquetas.split(",").forEach(et => {
            const tag = document.createElement("span");
            tag.className = "bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full";
            tag.textContent = et.trim();
            etiquetas.appendChild(tag);
          });

          descargar.onclick = () => alert(" Aquí se abriría el archivo: " + btn.dataset.archivo);

          // Mostrar detalle y ocultar lista
          lista.classList.add("hidden");
          detalle.classList.remove("hidden");
        });
      });

      volver.addEventListener("click", () => {
        detalle.classList.add("hidden");
        lista.classList.remove("hidden");
      });
    });