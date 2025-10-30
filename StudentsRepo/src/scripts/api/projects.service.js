import { apiFetch } from './apiClient.js';

export const ProjectsAPI = {
  async list() {
    try {
      return await apiFetch('/projects');
    } catch (error) {
      console.error('Error al listar proyectos:', error);
      throw error;
    }
  },

  async create(data) {
    try {
      return await apiFetch('/projects', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error al crear proyecto:', error);
      throw error;
    }
  },

  async update(id, data) {
    try {
      return await apiFetch(`/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error al actualizar proyecto:', error);
      throw error;
    }
  },

  async remove(id) {
    try {
      return await apiFetch(`/projects/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.error('Error al eliminar proyecto:', error);
      throw error;
    }
  },

  //  Nuevo método para obtener detalle por ID
  async getById(id) {
    try {
      return await apiFetch(`/projects/${id}`);
    } catch (error) {
      console.error('Error al obtener proyecto por ID:', error);
      throw error;
    }
  },
};


