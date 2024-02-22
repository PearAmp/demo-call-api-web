<template>
  <div class="container">
    <div class="page">
      <h1>Color Dark Tone</h1>
      <div class="box tone-1"></div>
      <div class="box tone-2"></div>
      <v-row>
        <v-col cols="12" md="1">
          <div class="box tone-3"></div>
        </v-col>
        <v-col cols="12" md="1">
          <div class="box tone-4"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="1">
          <div class="box tone-5"></div>
        </v-col>
        <v-col cols="12" md="1">
          <div class="box tone-6"></div>
        </v-col>
      </v-row>
      <div class="box tone-7"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorThemePage',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin-top: 4rem;
}
.row {
  margin: 1rem 0;
}
.col-md-1 {
    border: 1px solid;
}
.box {
  max-width: 20px;
  height: 20px;
  margin-bottom: 1rem;
}
.tone-1 {
  background-color: #00204a;
}
.tone-2 {
  background-color: #0c0c0c;
}
.tone-3 {
  background-color: #000;
}
.tone-4 {
  background-color: #fad932;
}
.tone-5 {
  background-color: #1f1d47;
}
.tone-6 {
  background-color: #db3620;
}
.tone-7 {
  background-color: #223781;
}
</style>