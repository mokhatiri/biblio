<template>
    <div class="books">
        <Book v-for="book in books" :key="book.id" :book="book"/>
    </div>
</template>
<script>
import Book from './Book.vue'

export default {
    name: 'Library',
    components: {
        Book
    },
    props: {
        books: {
            type: Array,
        }
    }
}
</script>

<style scoped>
.books{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>