<template>
    <div class="container">
        <div class="columns">
            <div class="column is-5 is-offset-4">
                <div class="notification" v-bind:class="[results? 'is-success' : 'is-danger']">
                    <slot name="body">Algo anduvo mal</slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    results: {required: true}
  }
}
</script>


<style lang="scss" scoped>
  .notification {
      margin: 10px}
</style>

