# StudentsRepo

Repositorio institucional para la gestión de proyectos académicos, investigaciones y trabajos de los estudiantes.  
El sistema cuenta con dos perfiles principales:

- **Administrador** → puede registrar, editar y eliminar proyectos desde un panel exclusivo.  
- **Estudiante** → puede explorar, filtrar y consultar proyectos de manera sencilla.

---

## Funcionalidades

- **Login y recuperación de contraseña**.
- **Visualización de proyectos** con detalle individual.
- **Formulario de administrador** para registrar proyectos (CRUD básico).
- **Integración con APIs** (mock y cliente API).
- **Manejo de datos de prueba** con JSON (`sample-data.json`).
- **Organización modular** de JavaScript (cada página con su propio script).
- **Estilos con TailwindCSS** + personalizaciones en `styles.css`.

---

## Estructura del proyecto

studentsrepo/
├── public/ # Páginas visibles
│ ├── index.html # Página principal
│ ├── login.html # Login
│ ├── recover.html # Recuperar contraseña
│ ├── proyecto.html # Listado de proyectos (vista estudiante)
│ ├── detalle-proyecto.html # Detalle de un proyecto
│ ├── admin.html # Panel del administrador
│ └── ayuda.html # Página de ayuda
│
├── src/
│ ├── main.js # Punto de entrada: detecta página y carga módulo
│ │
│ ├── scripts/ # Lógica por página y funcionalidades
│ │ ├── login.js
│ │ ├── recover.js
│ │ ├── proyecto.js
│ │ ├── detalleProyecto.js
│ │ ├── admin.js
│ │ ├── api.js
│ │ ├── apiClient.js
│ │ └── database.js
│ │
│ ├── assets/
│ │ ├── data/
│ │ │ └── sample-data.json # Datos de prueba
│ │ └── images/ # Logos e imágenes
│ │
│ ├── styles/
│ │ └── styles.css # Estilos personalizados
│ │
│ └── utils/
│ └── domUtils.js # Funciones de ayuda para el DOM
│
├── .gitignore # Archivos a ignorar en Git
├── README.md # Documentación del proyecto


---

##  Tecnologías utilizadas

- **HTML5**  
- **CSS3 + TailwindCSS**  
- **JavaScript (Vanilla, ES6 Modules)**  
- **JSON para datos de prueba**  
- **Git & GitHub para control de versiones**

---

## Equipo de trabajo

- **Mariana** → HTML + CSS + JS de interfaz visual.  
- **Valentina** → Documentación + apoyo en `api.js` y `recover.js`.  
- **Viadis** → Integración en `main.js`, conexión con `apiClient.js` y `database.js`, supervisión de `sample-data.json`.  

---

## Notas

- La carpeta `assets/data/` contiene **datos de prueba**.  
- La carpeta `assets/images/` contiene **imágenes y logos** del sistema.  
- El archivo `main.js` es el **cerebro central**, que detecta la página actual y carga la lógica correspondiente.  

