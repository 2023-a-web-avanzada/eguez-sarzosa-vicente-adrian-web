import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
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
    todos:any[];
}

// Define the initial state using that type
export const initialState: MateriaState = {
    materias: [],
    todos: [],
    materiaActual: {
        nombre: '',
        descripcion: '',
    },
    periodoActual: ''
}

export const fetchTodos = createAsyncThunk(
    'materias/fetchTodos',
    async () => {
        const url = new Date().getTime() % 2 === 0 ?
            'https://jsonplaceholder.typicode.com/todos' :
            'https://jsonplaceholder.typicodeyyy.com/todos'
        const response = await fetch(
            url,
            {method: 'GET'}
        )
            .then(async (res) => await res.json() as any[])
        return response
    }
)

export const materiaSlice = createSlice({
    name: 'materia',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        agregarMateria: (state, action: PayloadAction<Materia>) => {
            state.materias = [...state.materias, action.payload]
        },
        establecerMateriaActual: (state, action: PayloadAction<Materia>) => {
            state.materiaActual = action.payload
        },
        establecerPeriodoActual: (state, action: PayloadAction<string>) => {
            state.periodoActual = action.payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            // Add user to the state array
            state.todos = action.payload
        })
        builder.addCase(fetchTodos.rejected, (state) => {
            // Add user to the state array
            state.todos = [{id:'NA', title:'NA'}]
        })
    }
})


export const {
    agregarMateria,
    establecerMateriaActual,
    establecerPeriodoActual,
} = materiaSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMaterias = (state: RootState) => state.materias
export default materiaSlice.reducer