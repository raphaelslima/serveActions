import { usePostStore } from "../../store/postStore"
import { submitForm } from "../../actions/postActions";

export default async function Home() {
  const posts = usePostStore.getState().posts;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 space-y-4">
      <div>
        <form action={submitForm} className="flex flex-row items-center justify-between gap-4">
          <input type="text" required name="title" className="h-12 rounded-md p-2"/>
          <button type="submit" className="bg-blue-600 p-4 rounded-md text-center">Add Post</button>
        </form>
      </div>
      <div>
        <ul>
          {
            posts.map((post)=> <li key={post.id}>{post.title}</li>)
          }
        </ul>
      </div>
    </main>
  )
}
