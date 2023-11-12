'use client'
import {QueryClient} from "@tanstack/query-core";
import React, {useState} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import Table from "@/app/m_react_query/components/Table";
import {useStore} from "react-redux";

export default function (props: any) {
    const queryClient = new QueryClient()
    const [show, setShow] = useState(true)
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <h1>React Query</h1>
                {show && <Table></Table>}
                <button onClick={()=> setShow(!show)} className="btn btn-success"> mostrar / ocultar </button>
            </QueryClientProvider>
        </>
    )
}