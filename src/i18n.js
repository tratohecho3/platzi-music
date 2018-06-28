import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    search: 'Search',
    about: 'About',
    developed: 'Developed by Cesar Colina',
    find: 'Search a song',
    found: 'Found',
    loading: 'Loading...'
  },

  es: {
    search: 'Buscar',
    about: 'Nosotros',
    developed: 'Desarrollado por Cesar Colina',
    find: 'Buscar canciones',
    found: 'Encontrados',
    loading: 'Cargando...'
  }
}

const i18n = new VueI18n({
  messages, locale: 'en'
})

export default i18n
