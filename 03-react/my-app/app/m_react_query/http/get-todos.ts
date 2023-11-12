import {Post} from "@/app/m_react_query/types/post";

export const GetTodos = ()=>{
    return fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    ).then(a=>a.json() as Promise<Post[]>)
}