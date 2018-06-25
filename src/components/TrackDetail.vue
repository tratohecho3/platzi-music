<template>
    
    <div class="container">
        <pm-loader v-show="isLoading"></pm-loader>
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
import PmLoader from './shared/Loader'
export default {
  components: { PmTrack, PmLoader },
  data () {
    return {
      track: {},
      isLoading: false
    }
  },
  created () {
    const id = this.$route.params.id
    this.isLoading = true
    trackService.getById(id)
      .then(res => {
        console.log(res)
        this.track = res
        this.isLoading = false
      })
  }
}
</script>

<style lang="scss" scoped>
    .columns {
        margin: 20px;
    }
</style>
