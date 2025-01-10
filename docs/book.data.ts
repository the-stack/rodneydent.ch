import {createContentLoader} from "vitepress";

interface Book {
    id: number
    title: string
    cover_image: string | undefined
    excerpt: string | undefined
}

declare const data: Book[]
export { data }

export default createContentLoader('books/*.md', )