<template>
  <v-hover v-slot="{ hover }">
    <div class="Product">
      <img src="@/static/mock/product-1.png" alt="" />
      <h3>BELL PEPPER</h3>
      <h2 id="logo">$80.00</h2>
      <div v-if="hover">
        <div class="vflex">
          <div class="block">
            <v-icon color="#FFF" size="20px">mdi-menu</v-icon>
          </div>
          <div class="block ml-2 mr-2">
            <v-icon color="#FFF" size="20px">mdi-cart</v-icon>
          </div>
          <div class="block">
            <v-icon color="#FFF" size="20px">mdi-heart</v-icon>
          </div>
        </div>
      </div>
    </div>
  </v-hover>
</template>

<script>
export default {
  name: 'ProductPrice',
  data() {
    return {}
  },
}
</script>

<style lang='scss' scoped>
.Product {
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 100%;
  max-width: 280px;
  transition: transform 0.3s;
}
img:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
}

.Product:hover > #logo {
  display: none;
}
.vflex {
  display: flex;
  align-items: center;
}
.block {
  background-color: $color-base;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  border-radius: 50%;
}
</style>