<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2 bg-sideBarColor fixed sticky-sidebar p-0" id="sticky-sidebar">
        <Sidebar/>
      </div>
      <div class="col" id="main">
        <Navbar/>
        <div class="row mb-3 mx-5 mt-5 pt-5">
          <div class="col d-flex w-100 h-25" >
            <Analitics/>
          </div>
          <Statistic/>
        </div>
        <div class="row mb-5 mx-5">
          <Mapinfo/>
          <Help/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Analitics from './components/Analitics'
import Statistic from './components/Statistic'
import Mapinfo from './components/Mapinfo'
import Help from './components/Help'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Sidebar, Analitics, Mapinfo, Help, Navbar, Statistic
  }
}
</script>

<style lang="scss">
@import 'assets/custom-vars.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

body {
  font-family: 'Rubik', sans-serif !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#sticky-sidebar {
  z-index: 1040;
}
</style>
