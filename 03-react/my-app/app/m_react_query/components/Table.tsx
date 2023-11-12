import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {GetTodos} from "@/app/m_react_query/http/get-todos";
import {Post} from "@/app/m_react_query/types/post";

export default function (props:any){
    const queryClient = useQueryClient()
    const query = useQuery({ queryKey: ['todos'], queryFn: GetTodos })
    console.log('el amor')
    console.log('query', query);
    // // Mutations
    // const mutation = useMutation({
    //     mutationFn: postTodo,
    //     onSuccess: () => {
    //         // Invalidate and refetch
    //         queryClient.invalidateQueries({ queryKey: ['todos'] })
    //     },
    // })
    if(query.isPaused){
        return <p>Please connect to internet</p>
    }
    if(query.isLoading){
        return <p>Loading...</p>
    }
    if(query.isError){
        return <p>Error on the request</p>
    }

    return (
        <>
            <h2>Table</h2>
            <div className="row">
                {
                    query.data &&
                    query.data.map(
                        (post)=>{
                            return <div className="col-sm-3" key={post.id}>
                                {post.id}
                            </div>
                        }
                    )
                }
            </div>
        </>
    );
}