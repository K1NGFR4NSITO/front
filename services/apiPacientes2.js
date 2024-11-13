import axios from 'axios';

// const BASE_URL = 'https://app-84d299d1-f2c1-4453-b186-40061aa20a53.cleverapps.io/api';
const BASE_URL = 'http://localhost:4000/api';

// Registrar un paciente
export async function registrar(nombres, apellidos, ci, fecha_nacimiento, sexo, telefono, correo_electronico, pais, ciudad, provincia, zona, calle, usuario, contrasenia) {
    try {
        const response = await axios.post(`${BASE_URL}/pacientes2/registrar`, { nombres, apellidos, ci, fecha_nacimiento, sexo, telefono, correo_electronico, pais, ciudad, provincia, zona, calle, usuario, contrasenia });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Registrar historia clínica
export async function registrarHistoriaClinica(id_paciente, motivo_consulta, enfermedad_actual, antecedentes, diagnostico_cie, diagnostico_medico, tratamiento, observaciones, presion_arterial, peso, talla, temperatura_corporal, frecuencia_respiratoria, frecuencia_cardiaca, saturacion_oxigeno, examen_fisico_general, examen_piel) {
    try {
        const response = await axios.post(`${BASE_URL}/pacientes2/registrarHistoriaClinica`, { id_paciente, motivo_consulta, enfermedad_actual, antecedentes, diagnostico_cie, diagnostico_medico, tratamiento, observaciones, presion_arterial, peso, talla, temperatura_corporal, frecuencia_respiratoria, frecuencia_cardiaca, saturacion_oxigeno, examen_fisico_general, examen_piel });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Actualizar paciente
export async function actualizar(id, nombres, apellidos, ci, fecha_nacimiento, sexo, telefono, correo_electronico, pais, ciudad, provincia, zona, calle, usuario, contrasenia) {
    try {
        const response = await axios.put(`${BASE_URL}/pacientes2/actualizar/${id}`, { nombres, apellidos, ci, fecha_nacimiento, sexo, telefono, correo_electronico, pais, ciudad, provincia, zona, calle, usuario, contrasenia });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Eliminar un paciente
export async function eliminar(id) {
    try {
        const response = await axios.put(`${BASE_URL}/pacientes2/delete/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Eliminar múltiples pacientes
export async function eliminarVarios(ids) {
    try {
        const response = await axios.put(`${BASE_URL}/pacientes2/eliminarPacientes`, { ids });
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Mostrar todos los pacientes
export async function mostrarPacientes() {
    try {
        const response = await axios.get(`${BASE_URL}/pacientes2/pacientes`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Mostrar historia clínica de un paciente
export async function mostrarHistoriaClinica(id) {
    try {
        const response = await axios.get(`${BASE_URL}/pacientes2/historiaClinica/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Mostrar evolución de un paciente
export async function mostrarEvolucionPaciente(id) {
    try {
        const response = await axios.get(`${BASE_URL}/pacientes2/evolucionPaciente/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Mostrar perfil del médico
export async function mostrarMedicoPerfil(id) {
    try {
        const response = await axios.get(`${BASE_URL}/pacientes2/medico/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Mostrar fichas de un médico en una fecha específica
export async function mostrarFichasMedico(id, fecha) {
    try {
        const response = await axios.get(`${BASE_URL}/pacientes2/fichasMedico/${id}/${fecha}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Finalizar una ficha
export async function finalizarFicha(id) {
    try {
        const response = await axios.put(`${BASE_URL}/pacientes2/finalizarFicha/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Insertar evolución médica
export async function insertarEvolucionMedica(id, id_paciente, nota_evolucion, peso, altura, imc, tratamiento, fecha_evolucion) {
    try {
        const response = await axios.post(`${BASE_URL}/pacientes2/evolucionMedica`, { id, id_paciente, nota_evolucion, peso, altura, imc, tratamiento, fecha_evolucion });
        return response.data;
    } catch (error) {
        throw error;
    }
}
