<template>
  <div id="app">
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <div class="columns">
            <div class="column is-four-fifths">
              <input type="text" class="input is-large" placeholder="Buscar Canciones" v-model="searchQuery">
            </div>
            <div class="column">
              <a class="button is-info is-large" @click="search">Buscar</a>
              <a class="button is-danger is-large">&times;</a>
            </div>
          </div>
          <div class="container">
            <p id="encontrados">
              <small > {{ searchMessage }}</small>
            </p>
          </div>

        </div>

      </nav>
      <div class="container">
          <div class="columns" v-for="t in tracks">
     
              {{ t.name }} - {{ t.artists[0].name }}
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import trackService from './services/track'

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []

    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) {
        return
      }
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

#encontrados {
  
  font-weight: bold;
  margin-bottom: 15px;
}
</style>
