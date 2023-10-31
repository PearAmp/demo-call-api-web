<template>
  <div class="Detail">
    <v-row>
      <v-col cols="12" md="4" sm="4">
        <img src="@/static/mock/Dried.jpeg" alt="" />
      </v-col>
      <v-col cols="12" md="8" sm="8">
        <div class="vflex">
          <h4>July 20, 2019 Admin</h4>
          <v-icon color="grey" size="15px">mdi-message-text</v-icon>
          <span>3</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.Detail {
  img {
    width: 100%;
    height: 28vh;
    // max-width: 280px;
  }
}
.vflex {
  display: flex;
  align-items: center;
  h4 {
    padding-right: 0.5rem;
  }
  span {
    color: $color-label;
    font-size: 0.8rem;
  }
}
</style>