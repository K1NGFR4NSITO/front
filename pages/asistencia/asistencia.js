import React, { useEffect, useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import { registrarAsistencia } from '../../services/apiAsistencia';
import { useRouter } from 'next/router';
import { getSession } from '../../utils/session';
import { decryptData } from '../../services/crypto';

const AsistenciaForm = () => {
    const [ID_Estudiante, setID_Estudiante] = useState('');
    const [Lunes, setLunes] = useState('Ausente');
    const [Martes, setMartes] = useState('Ausente');
    const [Miercoles, setMiercoles] = useState('Ausente');
    const [Jueves, setJueves] = useState('Ausente');
    const [Viernes, setViernes] = useState('Ausente');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            ID_Estudiante,
            Lunes,
            Martes,
            Miercoles,
            Jueves,
            Viernes
        };

        try {
            const response = await registrarAsistenciaAPI(data);
            setMensaje(response.message);
        } catch (error) {
            setMensaje('Hubo un error al registrar la asistencia');
        }
    };

    return (
        <div>
            <h1>Registro de Asistencia</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID Estudiante: </label>
                    <input
                        type="number"
                        value={ID_Estudiante}
                        onChange={(e) => setID_Estudiante(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Lunes: </label>
                    <select
                        value={Lunes}
                        onChange={(e) => setLunes(e.target.value)}
                    >
                        <option value="Presente">Presente</option>
                        <option value="Ausente">Ausente</option>
                    </select>
                </div>
                <div>
                    <label>Martes: </label>
                    <select
                        value={Martes}
                        onChange={(e) => setMartes(e.target.value)}
                    >
                        <option value="Presente">Presente</option>
                        <option value="Ausente">Ausente</option>
                    </select>
                </div>
                <div>
                    <label>Miércoles: </label>
                    <select
                        value={Miercoles}
                        onChange={(e) => setMiercoles(e.target.value)}
                    >
                        <option value="Presente">Presente</option>
                        <option value="Ausente">Ausente</option>
                    </select>
                </div>
                <div>
                    <label>Jueves: </label>
                    <select
                        value={Jueves}
                        onChange={(e) => setJueves(e.target.value)}
                    >
                        <option value="Presente">Presente</option>
                        <option value="Ausente">Ausente</option>
                    </select>
                </div>
                <div>
                    <label>Viernes: </label>
                    <select
                        value={Viernes}
                        onChange={(e) => setViernes(e.target.value)}
                    >
                        <option value="Presente">Presente</option>
                        <option value="Ausente">Ausente</option>
                    </select>
                </div>
                <button type="submit">Registrar Asistencia</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default AsistenciaForm;