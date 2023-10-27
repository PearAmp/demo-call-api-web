<template>
  <v-app light>
    <NavBar class="nav" />
    <v-main>
        <Nuxt />
    </v-main>
   
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
    
    }
  },
}
</script>

<style lang='scss' scoped>
.nav {
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: #FFF;
}
</style>
