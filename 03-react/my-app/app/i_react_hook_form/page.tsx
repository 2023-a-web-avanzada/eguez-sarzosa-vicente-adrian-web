'use client'
// i_react_hook_form/page.tsx
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {FormularioEjemplo} from "@/app/i_react_hook_form/types/formulario-ejemplo";
import {Button, FormControl, InputLabel} from "@mui/material";

export default function Page(){
    const [nombre, setNombre] = useState('Adrian');

    const {handleSubmit, register, formState: {errors, isValid},
        control
    } = useForm<FormularioEjemplo>(
        {
            defaultValues: {
                nombre: 'Vicente',
                estadoCivil: ''
            },
            mode: 'all'
        }
    )
    const controladorSubmit = (data: FormularioEjemplo) => {
        console.log(data)
    }
    return (
        <>
                <div className="container">
                    <h1>Formulario con react hook form</h1>
                    <form onSubmit={handleSubmit(controladorSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="EJ: Adrian" id="nombre"
                                   {
                                        ...register('nombre',{
                                            required: {
                                                value: true,
                                                message: 'Nombre requerido'
                                            },
                                            maxLength: {value: 20, message: 'Longitud maxima 20'},
                                            minLength: {value: 5, message: 'Longitud minima 5'},
                                        })
                                   }
                            />
                            <div id="nombreHelp" className="form-text">
                                Ingresa tu nombre.
                            </div>
                            { errors.nombre &&
                                <div className="alert alert-warning"
                                     role="alert">
                                    Tiene errores {errors.nombre.message}
                                </div>
                            }
                        </div>
                        <div className="mb-3">
                            <FormControl fullWidth>
                                <InputLabel id="estadoCivilLabelId">Estado civil</InputLabel>
                                { }
                            </FormControl>
                        </div>
                        <Button type="submit"
                                disabled={!isValid}
                                variant='outlined'>
                            Submit
                        </Button>
                    </form>
                </div>

        </>
    )
}