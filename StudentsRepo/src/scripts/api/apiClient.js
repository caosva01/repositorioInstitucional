
// src/scripts/api/apiClient.js
// Conecta el proyecto con MockAPI

const BASE_URL = 'https://68df2bd9898434f41356ec07.mockapi.io/viadis/api/v1';

// Función genérica para hacer peticiones HTTP
export async function apiFetch(endpoint, options = {}) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error('Error en apiFetch:', error);
    throw error;
  }
}
