import {createContentLoader} from "vitepress";

interface Step {
    title: string
    html: string | undefined
    excerpt: string | undefined
}

declare const data: Step[]
export { data }

export default createContentLoader('cv/*.md', {
    includeSrc: false, // include raw markdown source?
    render: true,     // include rendered full page HTML?
    excerpt: false,    // include excerpt?
})