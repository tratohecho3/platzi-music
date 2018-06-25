<template>
    <div class="container">
        <div class="columns">
            <div class="column is-5 is-offset-4">
                <pm-track :track="track"></pm-track>
            </div>
        </div>
       
    </div>
    
</template>


<script>
import PmTrack from './Track'
import trackService from '../services/track.js'
export default {
  components: { PmTrack },
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id
    trackService.getById(id)
      .then(res => {
        console.log(res)
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>
    .columns {
        margin: 20px;
    }
</style>
