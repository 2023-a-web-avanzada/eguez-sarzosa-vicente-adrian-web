import {RootState} from "@/app/l_redux/store/store";
import {connect, MapDispatchToProps, useDispatch} from "react-redux";
import {
    establecerPeriodoActual,
    fetchTodos,
    Materia,
    MateriaState
} from "@/app/l_redux/features/materias/materiasSlice";
import {useAppSelector} from "@/app/l_redux/hooks/hooks";
import React from "react";
import {createSelector} from "reselect";

export type MateriaProps = {
    colorRojo: boolean;
}
type DispatchProps = {
    establecerPeriodoActual: typeof establecerPeriodoActual;
}
type ConnectedProps = {
    materiaActual: Materia;
    materiasFiltradas: Materia[];
}
const seleccionarMateriasMod2 = () => {
    const seleccionarMateriasPorMod2 = createSelector(
        [
            (state: RootState) => state.materias.materias
        ],
        (materias) => materias.filter(materia => Number(materia.nombre) % 2 === 0)
    )
    return seleccionarMateriasPorMod2
}


function mapStateToProps(state: RootState, ownProps: MateriaProps) {
    const seleccionarMateriasFiltradas = seleccionarMateriasMod2()
    return (state: RootState, ownProps: MateriaProps) => {
        const {materias} = state
        return {
            materiaActual: materias.materiaActual,
            ...ownProps,
            materiasFiltradas: seleccionarMateriasFiltradas(state)
        }
    }

}

const mapDispatchToProps: MapDispatchToProps<DispatchProps, MateriaProps > = {
    establecerPeriodoActual,
};
type MostrarMateriaProps = MateriaProps & DispatchProps & ConnectedProps

export function MostrarMateria(props: MostrarMateriaProps) {

    const materiaStore = useAppSelector((state) => state.materias)
    const {materiaActual, periodoActual, todos} = materiaStore;
    const dispatch = useDispatch()
    return (
        <>
            <h1>Mostrar Materia</h1>
            <p><strong>Periodo actual:</strong>{periodoActual}</p>
            <p><strong>Materia actual:</strong></p>
            <ul>
                <li><strong>Nombre:</strong> {materiaActual.nombre}</li>
                <li><strong>Descripcion:</strong> {materiaActual.descripcion}</li>
            </ul>
            <button className="btn btn-primary" onClick={
                (event) => {
                    event.preventDefault();
                    props.establecerPeriodoActual(new Date().getTime().toString());
                }
            }>
                Modificar Periodo Actual
            </button>
            <h2>Mostrar Materias Filtradas</h2>
            {
                props.materiasFiltradas
                    .map(
                        (materia) =>
                            <div key={materia.nombre}>
                                <div className="border-2 border-sky-500 p-4 m-2 text-center">
                                    <p><strong>Nombre:</strong>{materia.nombre}</p>
                                    <p><strong>Descripcion:</strong>{materia.descripcion}</p>
                                </div>
                            </div>
                    )
            }
            <h2>Mostrar Todos</h2>
            <button className="btn btn-primary" onClick={
                event => {
                    event.preventDefault()
                    dispatch(
                        fetchTodos() as any
                    )
                }
            }>
                Obtener todos
            </button>
            {
                todos
                    .map(
                        (todo) =>
                            <div key={todo.id}>
                                <div className="border-2 border-sky-500 p-4 m-2 text-center">
                                    <p><strong>ID:</strong> {todo.id}</p>
                                    <p><strong>Titulo:</strong> {todo.title}</p>
                                </div>
                            </div>
                    )
            }
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MostrarMateria)