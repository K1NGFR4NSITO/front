import React, { useEffect, useState, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { AutoComplete } from 'primereact/autocomplete';
import { mostrarPacientes, registrarHistoriaAcademica } from '../../services/apiPacientes';

export const RegistrarNotas = () => {
    const toast = useRef(null);

    // Estado para almacenar la lista de pacientes, el paciente seleccionado y sus notas
    const [pacientes, setPacientes] = useState([]);
    const [filteredPacientes, setFilteredPacientes] = useState([]);
    const [selectedPaciente, setSelectedPaciente] = useState(null);
    const [notas, setNotas] = useState({
        trimestre: null,
        materia_1: null,
        materia_2: null,
        materia_3: null,
        materia_4: null,
        materia_5: null,
        materia_6: null,
        materia_7: null,
        materia_8: null,
        materia_9: null,
        materia_10: null,
        observaciones: '',
        estado: true,
    });

    const trimestres = [
        { label: 'Primer Trimestre', value: 1 },
        { label: 'Segundo Trimestre', value: 2 },
        { label: 'Tercer Trimestre', value: 3 },
    ];

    // Obtener lista de pacientes al cargar el componente
    useEffect(() => {
        async function obtenerPacientes() {
            try {
                const response = await mostrarPacientes();
                const formattedPacientes = response.map(paciente => ({
                    nombre: `${paciente.nombres} ${paciente.apellidos}`,
                    id: paciente.id,
                }));
                setPacientes(formattedPacientes);
            } catch (error) {
                console.log("Error al obtener pacientes:", error);
            }
        }
        obtenerPacientes();
    }, []);

    // Filtrar pacientes para autocompletado
    const buscarPaciente = (event) => {
        let results = [];
        if (event.query.trim().length) {
            results = pacientes.filter(paciente => paciente.nombre.toLowerCase().includes(event.query.toLowerCase()));
        } else {
            results = [...pacientes];
        }
        setFilteredPacientes(results);
    };

    // Función para registrar las notas
    const registrarNotas = async () => {
        if (!selectedPaciente) {
            toast.current.show({ severity: 'warn', summary: 'Advertencia', detail: 'Seleccione un estudiante para registrar las notas', life: 3000 });
            return;
        }

        if (notas.trimestre) {
            try {
                const response = await registrarHistoriaAcademica(
                    selectedPaciente.id, // Enviar el ID del estudiante seleccionado
                    notas.trimestre,
                    notas.materia_1,
                    notas.materia_2,
                    notas.materia_3,
                    notas.materia_4,
                    notas.materia_5,
                    notas.materia_6,
                    notas.materia_7,
                    notas.materia_8,
                    notas.materia_9,
                    notas.materia_10,
                    notas.observaciones,
                    notas.estado
                );
                toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Notas registradas correctamente', life: 3000 });
                setNotas({
                    trimestre: null,
                    materia_1: null,
                    materia_2: null,
                    materia_3: null,
                    materia_4: null,
                    materia_5: null,
                    materia_6: null,
                    materia_7: null,
                    materia_8: null,
                    materia_9: null,
                    materia_10: null,
                    observaciones: '',
                    estado: true,
                });
                setSelectedPaciente(null);
            } catch (error) {
                console.error("Error al registrar notas:", error);
                toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error al registrar notas', life: 3000 });
            }
        } else {
            toast.current.show({ severity: 'warn', summary: 'Advertencia', detail: 'Seleccione el trimestre', life: 3000 });
        }
    };

    return (
        <div className="grid">
            <Toast ref={toast} />
            <div className="col-12 md:col-12">
                <div className="card p-fluid">
                    <h5>Registrar Notas del Estudiante</h5>

                    <div className="field">
                        <label htmlFor="nombre">Buscar Estudiante</label>
                        <AutoComplete
                            placeholder="Buscar estudiante por nombre"
                            value={selectedPaciente}
                            onChange={(e) => setSelectedPaciente(e.value)}
                            suggestions={filteredPacientes}
                            completeMethod={buscarPaciente}
                            field="nombre"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="trimestre">Seleccione el Trimestre</label>
                        <Dropdown
                            id="trimestre"
                            value={notas.trimestre}
                            options={trimestres}
                            onChange={(e) => setNotas({ ...notas, trimestre: e.value })}
                            placeholder="Seleccione un trimestre"
                        />
                    </div>

                    {[...Array(10)].map((_, index) => (
                        <div className="field" key={index}>
                            <label htmlFor={`materia_${index + 1}`}>Nota de Materia {index + 1}</label>
                            <InputNumber
                                id={`materia_${index + 1}`}
                                value={notas[`materia_${index + 1}`]}
                                onValueChange={(e) => setNotas({ ...notas, [`materia_${index + 1}`]: e.value })}
                                mode="decimal"
                                min={0}
                                max={100}
                                placeholder={`Ingrese la nota de la Materia ${index + 1}`}
                            />
                        </div>
                    ))}

                    <div className="field">
                        <label htmlFor="observaciones">Observaciones</label>
                        <InputText
                            id="observaciones"
                            value={notas.observaciones}
                            onChange={(e) => setNotas({ ...notas, observaciones: e.target.value })}
                            placeholder="Ingrese observaciones adicionales"
                        />
                    </div>

                    <div className="card flex flex-wrap justify-content-end gap-3">
                        <Button
                            label="Registrar Notas"
                            onClick={registrarNotas}
                            className="p-mt-3 bg-blue-400"
                            style={{ width: 'auto' }}
                            disabled={!notas.trimestre || !selectedPaciente}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrarNotas;
