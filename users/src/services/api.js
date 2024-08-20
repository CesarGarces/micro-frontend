import { toast } from 'sonner';
import axios from 'axios';

const API_URL = process.env.API_URL ?? 'https://randomuser.me/api/?results=50';

/**
 * Fetch users from the API.
 * Handles errors and provides success notifications.
 * @returns {Promise<Array>} The list of users from the API.
 */
export const fetchUsers = async () => {
  try {
    // Perform a GET request to the API
    const response = await axios.get(API_URL);
    if (!response.data.results || response.data.results.length === 0) {
      throw new Error('No se encontraron resultados');
    }
    toast.success('Usuarios recuperados exitosamente');
    // Return the list of users
    return response.data.results;
  } catch (error) {
    toast.error(error.message || 'Error al recuperar usuarios');
    // Re-throw the error to be handled by the caller
    throw error;
  }
};