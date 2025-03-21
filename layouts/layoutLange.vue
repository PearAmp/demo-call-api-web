<template>
    <v-app light>
     <Header />
      <v-main>
        <Nuxt />
      </v-main>
      <BoxFooter />
      <span class="text-center"
        >Copyright ©2023 All rights reserved | This template is made with by
        Colorlib</span
      >
      <!-- <v-footer :absolute="!fixed" app>
        
      </v-footer> -->
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout',
    data() {
      return {}
    },
  }
  </script>
  
  <style lang='scss' scoped>
  .nav {
    position: fixed;
    z-index: 999;
    width: 100%;
    background-color: #fff;
  }
  </style>
  