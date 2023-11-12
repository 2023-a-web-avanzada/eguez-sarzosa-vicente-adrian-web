import {Post} from "@/app/m_react_query/types/post";

export const GetPosts = ()=>{
    return fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'GET',
        }
    )
}