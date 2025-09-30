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
├── public/
│ ├── index.html
│ ├── login.html
│ ├── recover-password.html
│ ├── proyecto.html
│ ├── detalle-proyecto.html
│ ├── admin.html
│ └── ayuda.html
├── src/
│ ├── main.js
│ ├── assets/
│ │ ├── data/
│ │ │ └── sample-data.json
│ │ └── images/
│ │ └── foto-login.jpg
│ ├── scripts/
│ │ ├── login.js
│ │ ├── admin.js
│ │ ├── proyecto.js
│ │ ├── detalleProyecto.js
│ │ ├── recover.js
│ │ ├── api.js
│ │ ├── apiClient.js
│ │ └── database.js
│ ├── styles/
│ │ └── styles.css
│ └── utils/
│ └── domUtils.js
├── .gitignore
├── README.md
└── info.json


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

