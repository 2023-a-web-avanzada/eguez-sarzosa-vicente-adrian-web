import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "@/app/l_redux/store/store";

// Define a type for the slice state
export type Materia = {
    nombre: string;
    descripcion: string;
}
export interface MateriaState {
    materias: Materia[];
    materiaActual: Materia;
    periodoActual: string;
}

// Define the initial state using that type
export const initialState: MateriaState = {
    materias: [],
    materiaActual:{
        nombre:'',
        descripcion:'',
    },
    periodoActual: ''
}

export const materiaSlice = createSlice({
    name: 'materia',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        agregarMateria: (state, action:PayloadAction<Materia>) => {
            state.materias = [...state.materias, action.payload]
        },
        establecerMateriaActual: (state, action:PayloadAction<Materia>) => {
            state.materiaActual = action.payload
        },
        establecerPeriodoActual: (state, action:PayloadAction<string>) => {
            state.periodoActual = action.payload
        },
    },
})

export const {
    agregarMateria,
    establecerMateriaActual,
    establecerPeriodoActual,
} = materiaSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMaterias = (state: RootState) => state.materias
export default materiaSlice.reducer