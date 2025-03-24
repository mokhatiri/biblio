<template>
    <div class="search">
        <input type="text" v-model="searchTerm" placeholder="Search for a book or author" @input="emit()"/>
        <div>
            <input type="checkbox" v-model="disponible" @change="emit()" checked/> Disponible
            <input type="checkbox" v-model="indisponible" @change="emit()" checked/> Empruntés
        </div>
    </div>
    <hr>
</template>
<script>    
    export default {
        name: 'SearchBar',
        data(){
            return {
                searchTerm: '',
                disponible: true,
                indisponible: true
            }
        },
        methods: {
            emit(){
                this.$emit("search", {
                    searchTerm: this.searchTerm,
                    disponible: this.disponible,
                    indisponible: this.indisponible
                })
            }
        }
    }
</script>
<style scoped>
    .search{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 300px;
    }
    input[type="checkbox"]{
        width: 15px;
        height: 15px;
    }
</style>