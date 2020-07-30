<template>
  <div class="card" style="max-width: 20rem;">
    <img :src="image" class="py-4"/>
    <div class="card-body">
      <h4 class="card-title">Нужна помощь?</h4>
      <div class="card-title">
        <h6 class="text-muted">Есть ли у вас проблемы при
        использовании программы?</h6>
      </div>
      <button type="button" class="btn btn-blueSpecialButton">Пишите нам</button>
    </div>
  </div>
</template>

<script>
import image from '../assets/help.png'

export default {
  name: 'Help',
  props: {
  },
  data: () => ({ image })
}
</script>

<style scoped>
</style>
