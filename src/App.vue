<template>
  <div id="app">
    <pm-header></pm-header>
    <pm-loader v-show="isLoading"></pm-loader>
    <section class="section" v-show="!isLoading">
      <nav class="nav">
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
          <div class="columns is-multiline">
              <div class="column is-one-quarter" v-for="t in tracks">
                <pm-track :track="t" @select="setSelectedTrack" :class="{ 'is-active': t.id === selectedTrack}"></pm-track>
              </div>
              
          </div>
      </div>
      
    </section>
    <pm-footer></pm-footer>
  </div>
</template>

<script>
import trackService from './services/track'
import PmFooter from './components/layout/Footer'
import PmHeader from './components/layout/Header'
import PmTrack from './components/Track'
import PmLoader from './components/shared/Loader'

export default {
  name: 'app',
  components: {PmFooter, PmHeader, PmTrack, PmLoader},
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: ''

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
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
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

.is-active {
  border: 3px #23d160 solid;
}
</style>
