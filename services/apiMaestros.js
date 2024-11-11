import axios from 'axios';

//const BASE_URL = 'https://app-84d299d1-f2c1-4453-b186-40061aa20a53.cleverapps.io/api';
const BASE_URL = 'http://localhost:4000/api';

// Obtener todos los maestros
export async function obtenerMaestros() {
    try {
        const response = await axios.get(`${BASE_URL}/maestros`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Obtener un maestro por su ID
export async function obtenerMaestroPorId(id_maestro) {
    try {
        const response = await axios.get(`${BASE_URL}/maestro/${id_maestro}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Insertar un nuevo maestro
export async function registrarMaestro(nombre, apellido, materia) {
    try {
        const response = await axios.post(`${BASE_URL}/maestros`, { nombre, apellido, materia });
        return response.data;
    } catch (error) {
        throw error;
    }
}
