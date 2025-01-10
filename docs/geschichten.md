---
geschichten: true
---

<script setup>
import {mdiArrowUpRightBold} from '@mdi/js';
import {computed} from 'vue';
import {data as books} from './book.data.ts';

const allBooks = computed(()=>{
    let result = [];
    books.forEach(book=>{
        let newBook = {
            url: book.url,
            coverImg: book.frontmatter.coverImg
        };
        result.push(newBook);
        if(book.frontmatter.parts){
            book.frontmatter.parts.forEach( part=> {
                let newPart = {
                url: 'books/'+part.link,
                coverImg: part.coverImg
                };
                result.push(newPart);
            })
        }
    });
    return result;
})

</script>
<div class="content">
<div class="g-title">
<h1>Geschichten</h1>
<p>Ich weiss nicht was ich hier sagen soll...</p>
</div>
<div class="books">
<a v-for="book in allBooks" 
    key="index" 
    :href="book.url" class="cover">

<div class="book__card">
<img alt="book cover" :src="book.coverImg"/>
<div class="button--fab">
    <svg width="30px" viewBox="1 3 22 17">
          <g>
            <path :d="mdiArrowUpRightBold"/>
          </g>
        </svg>
</div>
</div>

</a>
</div>
</div>