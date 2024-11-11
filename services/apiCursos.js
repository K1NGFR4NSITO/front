import axios from 'axios';

//const BASE_URL = 'https://app-84d299d1-f2c1-4453-b186-40061aa20a53.cleverapps.io/api';
const BASE_URL = 'http://localhost:4000/api';

// Obtener todos los cursos
export async function obtenerCursos() {
    try {
        const response = await axios.get(`${BASE_URL}/cursos`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Obtener los cursos de un nivel específico
export async function obtenerCursosPorNivel(nivel_id) {
    try {
        const response = await axios.get(`${BASE_URL}/cursos/nivel/${nivel_id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Insertar un nuevo curso
export async function registrarCurso(nombre_curso, descripcion, nivel, color_curso, maestro_responsable) {
    try {
        const response = await axios.post(`${BASE_URL}/cursos`, {
            nombre_curso,
            descripcion,
            nivel,
            color_curso,
            maestro_responsable,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
