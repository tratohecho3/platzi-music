<template>
  <main>
    <transition name="move">
      <pm-notification v-show="showNotification" :results="false">
        <p slot="body">
          No se encontraron resultados
        </p>
      </pm-notification>
    </transition>

    <transition name="move">
      <pm-notification v-show="hasData" :results="true">
        <p slot="body">
          {{ $t('found') }}: {{ searchMessage }}
        </p>
      </pm-notification>
    </transition>

    <transition name="move">
      <pm-loader v-show="isLoading"></pm-loader>
    </transition>
    <section class="section" v-show="!isLoading">
      <nav class="nav">
        <div class="container">
          <div class="columns">
            <div class="column is-four-fifths">
              <input type="text" class="input is-large" :placeholder="$t('find')" v-model="searchQuery" @keyup.enter="search">
            </div>
            <div class="column">
              <a class="button is-info is-large" @click="search">{{ $t('search') }}</a>
            </div>
          </div>
          <div class="container">
            <p id="encontrados">
              <small > {{ $t('found') }}: {{ searchMessage }}</small>
            </p>
          </div>

        </div>

      </nav>
      <div class="container">
          <div class="columns is-multiline">
              <div class="column is-one-quarter" v-for="t in tracks">
                <pm-track :track="t" @select="setSelectedTrack" :class="{ 'is-active': t.id === selectedTrack}" v-blur="t.preview_url"></pm-track>
              </div>
              
          </div>
      </div>
      
    </section>
  </main>
</template>

<script>

import trackService from '../services/track.js'
import PmTrack from '../components/Track'
import PmLoader from '../components/shared/Loader'
import PmNotification from '../components/shared/Notification'

export default {
  name: 'app',
  components: {PmTrack, PmLoader, PmNotification},
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: '',
      hasData: false

    }
  },
  computed: {
    searchMessage () {
      return `${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    },
    hasData () {
      if (this.hasData) {
        setTimeout(() => {
          this.hasData = false
        }, 3000)
      }
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
          this.showNotification = res.tracks.total === 0
          this.hasData = res.tracks.total > 0
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


#encontrados {
  
  font-weight: bold;
  margin-bottom: 15px;
}

.is-active {
  border: 3px #23d160 solid;
}
</style>
