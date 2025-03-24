<template>
    <!-- first the image-->
    <div id="book">
        <div id="book-details">
            <img :src="book.image" :alt="book.title">
            <!-- then the title and the author-->
            <h1>titre : {{ book.titre }}</h1>
            <h2>auteur : {{ book.auteur }}</h2>
            <p>categorie : {{ book.categorie }}</p>
            <p v-if="book.disponible" style="color: green">Disponible</p>
            <p v-else style="color: red">Indisponible</p>
        </div>
        <fieldset>
            <legend>Resume</legend>
            <p>{{ book.resume }}</p>
        </fieldset>
    </div>
</template>
<script>
    export default {
        name: 'BookView',
        data(){
            return {
                book: {}
            }
        },
        mounted(){
            fetch(`${this.$JsonURL}/${this.$route.params.id}`)
            .then(res => res.json())
            .then(data => this.book = data)
        }
    }
</script>
<style scoped>
    #book{
        display: flex;
        flex-direction: row;
    }
    #book-details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 20px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 500px;
        height: 500px;
        img{
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
    }
    fieldset{
        display: flex;
        width: 550px;
        height: 550px;
    }
</style>