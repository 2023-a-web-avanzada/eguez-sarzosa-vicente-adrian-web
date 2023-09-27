'use client'
import Image from 'next/image'
import {ButtonHTMLAttributes, useState} from "react";

export default function Home() {
    const [list, setList] = useState([] as {text:string;id:number;}[]);
    const [message, setMessage] = useState('');
    const handleChange = (event: any) => {
        setMessage(event.target.value);
    };

    const displayMessage = (event: any) => {
        event.preventDefault();
        if(message ===''){
            alert('please insert a message');
        }else{
            setList([...list, {text: message as string, id:Date.now()}]);
            setMessage('');
        }

    };
    const removeElement = (id: number) => {
        const newList = list.filter((item)=> id !== item.id);
        console.log(newList);
        setList([...newList]);
    };
    const showList = ()=> {
        return list.map((item)=> <div className='col-sm-3' key={item.id} onClick={(e)=>{
            console.log('aa')
            e.preventDefault();
            removeElement(item.id)
        }}>
            <div className="alert alert-primary">
                <p>{item.text}</p>
            </div>
        </div>);
    };
    return (
        <main className="container">
            <h1>Test</h1>
            <div className="mb-3">
                <label htmlFor="test" className="form-label">Element</label>
                <input value={message}
                       onChange={handleChange}
                       type="text" className="form-control" id="test" placeholder="Enter a string"/>
            </div>
            <button type="button" className="btn btn-primary w-100" onClick={displayMessage}>
                Primary
            </button>
            <p>List items:</p>
            <div className="row">
                { showList() }
            </div>
        </main>
    )
}
