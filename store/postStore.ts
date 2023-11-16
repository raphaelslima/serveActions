import { create } from "zustand";
import { Post } from "../types";
import {v4 as uuidv4} from 'uuid'

const myPost: Post[] = [
    {
        id: uuidv4(),
        title: 'Teste 1'
    },
    {
        id: uuidv4(),
        title: 'Teste 2'
    }
]

type PostStore = {
    posts: Post[];
    add: (post: Post) => void
}

export const usePostStore = create<PostStore>()((set) => ({
    posts: myPost,
    add: (post: Post) => 
      set((state)=> ({
        posts: [...state.posts, post]
        }))
    }))