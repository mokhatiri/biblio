<template>
  <SearchBar @search = "search" />
  <Library :books="books" />
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import Library from '@/components/Library.vue'

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    Library
  },
  data(){
    return {
      books: [],
    }
  },
  mounted(){
    fetch(this.$JsonURL)
    .then(res => res.json())
    .then(data => this.books = data)
  },
  methods:{
    search(searchelem){
      let searchTerm = searchelem.searchTerm;
      let disponible = searchelem.disponible;
      let indisponible = searchelem.indisponible;

      fetch(this.$JsonURL)
      .then(res => res.json())
      .then(
        data => this.books = data
          .filter(book => 
            (book.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.auteur.toLowerCase().includes(searchTerm.toLowerCase()))&&
            ((book.disponible && disponible) || (!book.disponible && indisponible))
        ))
    }
  }
}
</script>