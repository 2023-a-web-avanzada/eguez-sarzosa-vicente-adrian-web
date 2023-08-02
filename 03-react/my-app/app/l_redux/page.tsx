'use client'
import {useAppSelector} from "@/app/l_redux/hooks/hooks";
import {useDispatch} from "react-redux";
import React from "react";
import { agregarMateria, establecerMateriaActual, establecerPeriodoActual } from './features/materias/materiasSlice'
import MostrarMateria from "@/app/l_redux/components/MostrarMateria";

export default function Page() {

    const materiaStore = useAppSelector((state) => state.materias)
    const {materias, materiaActual, periodoActual} = materiaStore;
    const dispatch = useDispatch()
    return (
        <>
            <h1>Materias</h1>
            <div className="row">
                <div className="col-sm-6">
                    <div className="d-grid gap-1 col-12 mx-auto">
                        <button className="btn btn-primary" onClick={
                            (event)=>{
                                event.preventDefault();
                                dispatch(agregarMateria({nombre: new Date().getTime().toString(), descripcion:'desc'}));
                            }
                        }>
                            Anadir Materia
                        </button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="d-grid gap-1 col-12 mx-auto">
                        <button className="btn btn-primary"  onClick={
                            (event)=>{
                                event.preventDefault();
                                dispatch(establecerPeriodoActual(new Date().getTime().toString()));
                            }
                        }>
                            Setear Periodo actual
                        </button>
                    </div>
                    <br/>
                    <br/>
                </div>
                <div className="col-sm-6">
                    <p><strong>Periodo actual:</strong>{periodoActual}</p>
                    <p><strong>Materia actual:</strong></p>
                    <ul>
                        <li><strong>Nombre:</strong> {materiaActual.nombre}</li>
                        <li><strong>Descripcion:</strong> {materiaActual.descripcion}</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        {
                            materias.map(
                                (materia) =>
                                    <div key={materia.nombre} className="col-sm-6">
                                        <div className="border-2 border-sky-500 p-4 m-2">
                                            <div className="text-center">
                                                <p><strong>Nombre:</strong>{materia.nombre}</p>
                                                <p><strong>Descripcion:</strong>{materia.descripcion}</p>
                                            </div>
                                            <div className="d-grid gap-1 col-12 mx-auto">
                                                <button className="btn btn-primary" onClick={
                                                    (event)=>{
                                                        event.preventDefault();
                                                        dispatch(establecerMateriaActual(materia));
                                                    }
                                                }>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <h1>Mostrar materia actual en componente</h1>
            <MostrarMateria colorRojo={true}/>
        </>
    )
}