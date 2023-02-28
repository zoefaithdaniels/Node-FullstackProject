<template>
    <NavBar/>
    <router-view/>
    <FooterComponentVue/>


</template>

<script>
import FooterComponentVue from './components/FooterComponent.vue';
import NavBar from './components/NavBarComponent.vue';

  export default {
    components:{
      NavBar,
      FooterComponentVue
    }
  }
</script>

<style scoped>
/* body {
  min-width: 100vh;
} */
</style>