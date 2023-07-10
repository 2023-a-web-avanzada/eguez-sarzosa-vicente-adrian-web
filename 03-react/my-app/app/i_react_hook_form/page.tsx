'use client'
// i_react_hook_form/page.tsx
import {useState} from "react";
import {useForm} from "react-hook-form";
import {FormularioEjemplo} from "@/app/i_react_hook_form/types/formulario-ejemplo";

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
    return (<></>)
}