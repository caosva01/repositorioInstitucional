// src/scripts/api/auth.service.js
// Servicio encargado de la autenticación con MockAPI

import { apiFetch } from './apiClient.js';

export const AuthAPI = {
  //  Iniciar sesión
  async login(email, password) {
    if (!email || !password) throw 'Completa todos los campos';

    try {
      // Buscar usuario en MockAPI
      const users = await apiFetch(`/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
      
      if (!users.length) throw 'Usuario o contraseña incorrectos';
      
      const user = users[0];
      console.log(" Usuario encontrado:", user);
      return user;
    } catch (error) {
      console.error('Error en AuthAPI.login:', error);
      throw 'No se pudo iniciar sesión.';
    }
  },

  //  Registrar un nuevo usuario (si lo necesitas)
  async register(data) {
    try {
      return await apiFetch('/users', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error;
    }
  },
};


