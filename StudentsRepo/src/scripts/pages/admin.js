// login.js
import { validateLogin } from './database.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const message = document.getElementById('message'); // opcional en el HTML para mostrar errores

  if (!form) {
    console.warn('No se encontró #loginForm en la página.');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    message.textContent = '';

    const email = (emailInput.value || '').trim();
    const password = (passwordInput.value || '');

    try {
      const user = await validateLogin(email, password);
      // Guardamos una sesión simple (solo para demo)
      localStorage.setItem('sessionUser', JSON.stringify(user));

      // Mostrar mensaje de bienvenida antes de redirigir
      alert(`Inicio de sesión correcto. Bienvenido ${user.username} (${user.role === 'admin' ? 'Administrador' : 'Estudiante'})`);

      // Redirigir según rol
      if (user.role === 'admin') {
        window.location.href = './admin.html';
      } else {
        window.location.href = './index.html';
      }
    } catch (err) {
      // err es string con el mensaje de error de validateLogin
      if (message) {
        message.textContent = err;
        message.style.color = 'red';
      } else {
        alert(err);
      }
    }
  });
});


