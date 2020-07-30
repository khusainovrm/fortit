<template>
  <div class="sticky-top">

    <div class="border-bottom border-ligthGrey">
      <img :src="image" class="w-100" />
    </div>

    <div class="p-3">

    <ul class="list-group">
      <li class="list-group-item border-0 bg-sideBarColor text-ligthGrey">
        МЕНЮ
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="columns-gap" class="mr-3" flip-v></b-icon>
        Панель
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="person-circle" class="mr-3"></b-icon>
        Расширения
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="pen" class="mr-3"></b-icon>
        Дизайн
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="people" class="mr-3"></b-icon>
        Продажи
      <span class="badge badge-whiteText badge-pill offset-2">6</span>
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="handbag" class="mr-3"></b-icon>
        Покупатели
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="calendar4" class="mr-3"></b-icon>
        Маркетинг
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="window" class="mr-3"></b-icon>
        Система
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item border-0 bg-sideBarColor text-ligthGrey">
        ПОДДЕРЖКА
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="question-circle" class="mr-3"></b-icon>
        Нужна помощь?
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="envelope" class="mr-3"></b-icon>
        Контакты
      </li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item border-0 bg-sideBarColor text-ligthGrey">
        SETTINGS
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
      <b-icon icon="hammer" class="mr-3"></b-icon>
        Настройки
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="moon" class="mr-3"></b-icon>
        Темы
      </li>
      <li class="list-group-item border-0 bg-sideBarColor text-light menu">
        <b-icon icon="box-arrow-right" class="mr-3"></b-icon>
        Выйти
      </li>
    </ul>

    </div>
  </div>
</template>

<script>
import image from '../assets/logo.png'

export default {
  name: 'Sidebar',
  data: () => ({ image }),
  props: {
  }
}
</script>

<style lang="scss" scoped>

.border-bottom {
    border-width: 1px !important;
}

li{
  user-select:none;
}
.menu {
  &:hover{
    cursor: pointer;
    background: #586773!important;
    border-radius: 10px;
  }
}

</style>
