import axios from 'axios';

const API_URL = 'http://localhost:4000/api/asistencia/registrar';

export const registrarAsistenciaAPI = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;  // Devuelve la respuesta del servidor
    } catch (error) {
        console.error('Error al registrar la asistencia:', error);
        throw error;  // Lanza el error para que el frontend lo maneje
    }
};