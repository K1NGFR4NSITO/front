import axios from 'axios';

//const BASE_URL = 'https://app-84d299d1-f2c1-4453-b186-40061aa20a53.cleverapps.io/api';
const BASE_URL = 'http://localhost:4000/api';


export async function registrar(nombres, apellidos, ci, fecha_nacimiento, sexo, telefono, correo_electronico, pais, ciudad, provincia, zona, calle, usuario, contrasenia) {
    try {

        const response = await axios.post(`${BASE_URL}/pacientes/registrar`, { nombres, apellidos, ci, fecha_nacimiento, sexo, telefono, correo_electronico, pais, ciudad, provincia, zona, calle, usuario, contrasenia });
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export async function registrarHistoriaAcademica(id_paciente, trimestre, materia_1, materia_2, materia_3, materia_4, materia_5, materia_6, materia_7, materia_8, materia_9, materia_10, observaciones, estado) {
    try {
        const response = await axios.post(`${BASE_URL}/pacientes/registrarHistoriaAcademica`, {
            id_paciente,
            trimestre,
            materia_1, materia_2, materia_3, materia_4, materia_5,
            materia_6, materia_7, materia_8, materia_9, materia_10,
            observaciones, estado
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}



export async function actualizar(id, nombres, apellidos, ci, fecha_nacimiento, sexo, telefono, correo_electronico, pais, ciudad, provincia, zona, calle, usuario, contrasenia) {
    try {
        const response = await axios.put(`${BASE_URL}/pacientes/actualizar/${id}`, { nombres, apellidos, ci, fecha_nacimiento, sexo, telefono, correo_electronico, pais, ciudad, provincia, zona, calle, usuario, contrasenia });
        return response.data;
    }
    catch (error) {
        throw error;
    }

}

export async function eliminar(id) {
    try {
        const response = await axios.put(`${BASE_URL}/pacientes/delete/${id}`);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}


export async function eliminarVarios(ids) {
    try {
        const response = await axios.put(`${BASE_URL}/pacientes/eliminarPacientes`, { ids });
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export async function mostrarPacientes() {
    try {
        const response = await axios.get(`${BASE_URL}/pacientes/pacientes`);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export async function mostrarHistoriaAcademica(id_paciente) {
    try {
        const response = await axios.get(`${BASE_URL}/pacientes/historiaAcademica/${id_paciente}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}


export async function mostrarEvolucionPaciente(id) {
    try {
        const response = await axios.get(`${BASE_URL}/pacientes/evolucionPaciente/${id}`);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export async function mostrarMedicoPerfil(id) {
    try {
        const response = await axios.get(`${BASE_URL}/pacientes/medico/${id}`);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export async function mostrarFichasMedico(id, fecha) {
    try {
        const response = await axios.get(`${BASE_URL}/pacientes/fichasMedico/${id}/${fecha}`);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export async function finalizarFicha(id) {
    try {
        const response = await axios.put(`${BASE_URL}/pacientes/finalizarFicha/${id}`);
        return response.data;
    }
    catch (error) {
        throw error;
    }
}

export async function insertarEvolucionMedica(id, id_paciente, nota_evolucion, peso, altura, imc, tratamiento, fecha_evolucion) {
    try {
        const response = await axios.post(`${BASE_URL}/pacientes/evolucionMedica`, { id, id_paciente, nota_evolucion, peso, altura, imc, tratamiento, fecha_evolucion });
        return response.data;
    }
    catch (error) {
        throw error;
    }
}
