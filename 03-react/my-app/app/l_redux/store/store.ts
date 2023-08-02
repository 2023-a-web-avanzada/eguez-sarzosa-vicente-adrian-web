import { configureStore } from '@reduxjs/toolkit'
import {MateriaState} from "@/app/l_redux/features/materias/materiasSlice";
import materiasReducer from '../features/materias/materiasSlice'

const store = configureStore({
    reducer: {
        materias: materiasReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store