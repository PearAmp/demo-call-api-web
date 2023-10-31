<template>
  <div class="Blog">
    <div class="imgheader">
      <h3>HOME BLOG</h3>
      <h1>BLOG</h1>
    </div>
    <div class="container">
      <v-row>
        <v-col cols="12" md="9" sm="8">
            <BlogDetail />
        </v-col>
        <v-col cols="12" md="3" sm="4"></v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.imgheader {
  margin-top: 4rem;
  background-image: url('@/static/bg_1.jpg');
  height: 35vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  h1 {
    font-weight: bold;
  }
}
.container {
  width: 100%;
  max-width: 1320px;
}
.Block {
}
</style>