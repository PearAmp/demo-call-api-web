<template>
  <div class="BoxItem" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="boxtxt">
      <h3>{{ textName }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxItem',
  props: {
    textName: String,
    backgroundImage: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang='scss' scoped>
.BoxItem {
  height: 26vh;
  width: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  //   margin: 1rem 0;
  display: flex;
  align-items: flex-end;
}
.boxtxt {
  background-color: $color-base;
  padding: 0.25rem 2rem;
  h3 {
    color: #ffffff;
    font-weight: 500;
  }
}
</style>