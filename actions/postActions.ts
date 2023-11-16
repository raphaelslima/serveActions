"use server"

import z from 'zod';
import {v4 as uuidv4} from 'uuid'
import { usePostStore } from '../store/postStore';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const schema = z.object({
    id: z.string(),
    title: z.string()
})

export const submitForm = async (formData: FormData) => {
    const parsePost = schema.parse({
        id: uuidv4(),
        title: formData.get('title')
    })
    usePostStore.getState().add(parsePost)
    revalidatePath("/")
    redirect(`/post/${parsePost.id}`)
  }