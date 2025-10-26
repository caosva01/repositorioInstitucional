# StudentsRepo

Es un repositorio institucional para la gestión de proyectos académicos, investigaciones y trabajos de los estudiantes.  
El sistema cuenta con dos perfiles principales:

- **Administrador:** puede registrar, editar y eliminar proyectos desde un panel de control exclusivo.  
- **Estudiante:** puede explorar, filtrar y consultar proyectos de manera sencilla y visual.

---

## Funcionalidades

- **Gestión de proyectos:** visualización detallada de proyectos con autor, área, año y descripción.
- **Roles diferenciados:** interfaz para administrador y usuarios.
- **Autenticación:** páginas de inicio de sesión y recuperación de contraseña.
- **Manejo de datos de prueba** con JSON (`sample-data.json`).
- **Organización modular** de JavaScript (cada página con su propio script).
- **Organización visual:** tarjetas con información, etiquetas y archivos descargables.
- **Interfaz moderna:** desarrollada con **Tailwind CSS**, componentes dinámicos en **JavaScript** y personalizaciones en styles.


---

## Estructura del proyecto

StudentsRepo/
│
├── public/                     # Archivos HTML visibles para el usuario
│   ├── admin.html
│   ├── help.html
│   ├── index.html
│   ├── login.html
│   ├── project.html
│   ├── project-detail.html
│   └── recover-password.html
│
├── src/
│   ├── assets/                 # Recursos multimedia y datos
│   │   ├── data/
│   │   │   └── sample-data.json
│   │   └── images/
│   │       ├── iconos/         # Íconos del sistema
│   │       │   ├── calendario.png
│   │       │   ├── categorias.png
│   │       │   ├── documento.png
│   │       │   ├── escritor.png
│   │       │   ├── libro-abierto.png
│   │       │   └── materias.png
│   │       └── Tarjets img/    # Imágenes de las tarjetas principales
│   │           ├── CONTROL DE INVENTARIOS.png
│   │           ├── PLATAFORMA DE APRENDIZAJE.png
│   │           ├── SISTEMA DE GESTION.png
│   │           ├── intento de logo.png
│   │           └── marca.png
│   │
│   ├── scripts/                # Lógica de la aplicación
│   │   ├── admin.js
│   │   ├── api.js
│   │   ├── apiClient.js
│   │   ├── database.js
│   │   ├── login.js
│   │   ├── project.js
│   │   ├── projectDetail.js
│   │   └── recover.js
│   │
│   ├── styles/                 # Estilos globales del sistema
│   │   └── styles.css
│   │
│   └── utils/                  # Funciones auxiliares
│       ├── domUtils.js
│       └── main.js
│
├── .gitignore
├── info.json
└── README.md




---

##  Tecnologías utilizadas

- **HTML5**  
- **CSS3 + TailwindCSS**  
- **JavaScript (Vanilla, ES6 Modules)**  
- **JSON para datos de prueba**  
- **Git & GitHub para control de versiones**

---

## Equipo de trabajo

- **Mariana** → Estructura HTML, estilos CSS, lógica visual en JS (`project.js` `projectDetail.js`, readme).  
- **Valentina** → Documentación + apoyo en `api.js`, `login.js`, `admin.js`, `help.js` .  
- **Viadis** → Integración en `main.js`, conexión con `apiClient.js` y `database.js`, supervisión de `sample-data.json`.  

---

## Notas

**`assets/data/`** → Contiene los **datos de prueba** en formato JSON (`sample-data.json`), usados temporalmente antes de conectar una base de datos real.  
-  **`assets/images/`** → Agrupa todos los **recursos gráficos** del sistema:  
  -  `iconos/` → Íconos usados en la interfaz y filtros.  
  -  `Tarjets img/` → Imágenes asociadas a las tarjetas de proyectos.  
  -  `intento de logo.png` y `marca.png` → Elementos de identidad visual del sistema.  
-  **`scripts/`** → Contiene los **módulos JavaScript** que controlan la lógica de cada página (`login.js`, `project.js`, `admin.js`, etc.).  
- **`main.js`** → Es el **controlador principal** del proyecto. Detecta la página actual y carga automáticamente el script correspondiente.  
-  **`utils/`** → Incluye **funciones reutilizables**, como `domUtils.js`, que facilitan la manipulación del DOM y otras tareas comunes.  
- **`styles/styles.css`** → Define los **estilos personalizados** del sistema y complementa el uso de **TailwindCSS**.
