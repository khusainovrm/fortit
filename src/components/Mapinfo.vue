<template>
  <div class="col card mr-3">
    <div class="card-body py-4">
      <h4 class="card-title">На карте</h4>
    </div>
    <img :src="image" class="w-100"/>
  </div>
</template>

<script>
import image from '../assets/map.png'

export default {
  name: 'Mapinfo',
  props: {
  },
  data: () => ({ image })
}
</script>

<style scoped>
</style>
