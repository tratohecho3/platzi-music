<template>
    <section class="hero is-success">
        <div class="hero-head">
            <header class="navbar">
                <div class="container">
                    <div class="navbar-start">
                        <div class="navbar-brand">
                            Platzi Music
                        </div>
                    </div>
                    <div class="navbar-end navbar-menu">
                        
                        <a @click="selectLang('en')" class="navbar-item">En</a>
                        <a @click="selectLang('es')" class="navbar-item">Es</a>
                        <router-link class="navbar-item" to="/">{{ $t('search') }}</router-link>
                        <router-link class="navbar-item" to="about">{{ $t('about') }}</router-link>
                    </div>
                </div>
            </header>
        </div>
        
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">Platzi Music</h1>
                <h2 class="subtitle">Canciones <strong>Vue</strong>nisimas</h2>
                <pm-player></pm-player>
            </div>
        </div>
    </section>
</template>

<script>
import PmPlayer from '../Player'
export default {
  components: { PmPlayer },

  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
