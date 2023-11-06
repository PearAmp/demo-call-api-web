<template>
  <div class="Menu">
    <div class="box" :style="getStyle">
      <img :src="imageSrc" alt="" />
    </div>
    <h3>{{title}}</h3>
    <h4>{{label}}</h4>
  </div>
</template>

<script>
export default {
  name: 'BoxMenu',
  props: {
    stylings: Object,
    imageSrc: String,
    title: String,
    label: String
  },
  computed: {
    getStyle() {
      return this.stylings
    },
  },
}
</script>

<style lang='scss' scoped>
.Menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  background-color: #e4b2d6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 50%;
  // max-width: 90px;
  // height: 90px;
  img {
    width: 100%;
    max-width: 50px;
  }
}
.box:hover {
  background-color: $color-base !important;
}
h3 {
  font-weight: 500;
  padding-top: 0.25rem;
}
h4 {
  padding-top: 0.5rem;
  font-size: 0.8rem;
  color: $color-label;
}
</style>