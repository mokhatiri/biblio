<template>
    <div class="book" @click="$router.push(`/book/${book.id}`)">
        <div class="book-image">
            <img :src="book.image" :alt="book.title">
        </div>
        <div class="book-info">
            <h2>{{ book.titre }}</h2>
            <p>{{ book.auteur }}</p>
            <p>categorie : {{ book.categorie }}</p>
            <p v-if="book.disponible" style="color: green">Disponible</p>
            <p v-else style="color: red">Indisponible</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Book',
    props: {
        book: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .book{
        display: flex;
        flex-direction: row;

        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 500px;
        height : fit-content;
        .book-image{
            width: 100px;
            height: 100px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .book-info{
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            h2{
                font-size: 1.5rem;
                margin: 0;
            }
            p{
                margin: 5px 0;
            }
        }
    }
</style>