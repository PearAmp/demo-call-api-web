<template>
  <div class="BlockContact">
    <h3 class="txt-label">{{title}}: <span>{{detail}}</span></h3>
  </div>
</template>

<script>
export default {
  name: 'BlockContact',
  props: {
    title: String,
    detail: String
  }
}
</script>

<style lang="scss" scoped>
.BlockContact {
    background-color: #FFFFFF;
    padding: 1rem;
    height: 15vh;
    display: flex;
    align-items: center;
}
h3 span {
    color: #000;
}
</style>