import platiziMusicService from './platzi-music'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return platiziMusicService.get('/search', {params: {q, type}})
    .then(res => res.data)
}

trackService.getById = function (id) {
  return platiziMusicService.get(`/tracks/${id}`)
    .then(res => res.data)
}
export default trackService
