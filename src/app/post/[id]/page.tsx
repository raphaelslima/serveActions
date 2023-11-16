import { usePostStore } from "../../../../store/postStore"

const Post = ({params}: {params: {id: string}})=>{

    const post = usePostStore.getState().posts.find(post => post.id === params.id)

    if(!post) return <div>Não encontrado</div>
    return(
        <div>
            <h1>{post?.title}</h1>
        </div>
    )
}

export default Post