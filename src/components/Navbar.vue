<template>
  <b-navbar fixed="top" variant="white">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

    <!-- <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <b-icon icon="arrow"></b-icon>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div> -->

        <b-icon icon ="person-circle" variant="blueCard" font-scale="2"></b-icon>
        <b-nav-item-dropdown text="John Doe" right>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    icon: '<b-icon icon ="person-circle" variant="blueCard" font-scale="2"></b-icon>'
  }),
  props: {
  }
}
</script>

<style scoped>
</style>
