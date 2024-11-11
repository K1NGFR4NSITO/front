import axios from 'axios';

//const BASE_URL = 'https://app-84d299d1-f2c1-4453-b186-40061aa20a53.cleverapps.io/api';
const BASE_URL = 'http://localhost:4000/api';

// Obtener las notas de un estudiante
export async function obtenerNotasEstudiante(id_estudiante) {
    try {
        const response = await axios.get(`${BASE_URL}/notas/estudiante/${id_estudiante}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Insertar una nueva nota
export async function registrarNota(id_estudiante, id_curso, id_materia, nota, fecha) {
    try {
        const response = await axios.post(`${BASE_URL}/notas`, {
            id_estudiante,
            id_curso,
            id_materia,
            nota,
            fecha,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
