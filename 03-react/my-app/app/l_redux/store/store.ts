import materiasReducer from '../features/materias/materiasSlice'
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from "redux-logger";
const logger = createLogger();

const store = configureStore({
    reducer: {
        materias: materiasReducer,
    },
    devTools: true,
    middleware:[logger, thunkMiddleware]
},
)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store