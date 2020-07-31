<template>
<div>
  <div class="row">
    <div class="col-6">
      <div class="card mb-3 bg-blueCard text-whiteText" style="width: 12rem; height: 12rem;">
        <div class="card-body d-flex flex-column justify-content-center">
          <h4 class="card-title">Заказы</h4>
          <h1 class="card-title">1.7K</h1>
          <p class="card-text">Подробнее</p>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="card mb-3 bg-blueCard text-whiteText" style="width: 12rem; height: 12rem;">
        <div class="card-body d-flex flex-column justify-content-center">
          <h4 class="card-title">Распродажа</h4>
          <h1 class="card-title">24.2K</h1>
          <p class="card-text">Подробнее</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <div class="card mb-3 bg-blueCard text-whiteText" style="width: 12rem; height: 12rem;">
        <div class="card-body d-flex flex-column justify-content-center">
          <h4 class="card-title">Онлайн</h4>
          <h1 class="card-title">17.7K</h1>
          <p class="card-text">Подробнее</p>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="card mb-3 bg-blueCard text-whiteText" style="width: 12rem; height: 12rem;">
        <div class="card-body d-flex flex-column justify-content-center">
          <h4 class="card-title">Общие</h4>
          <h1 class="card-title">46.6K</h1>
          <p class="card-text">Подробнее</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Statistic',
  computed: {
    statistics () {
      return this.$store.getters.statistics
    }
  }

}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 20px;
}
</style>
