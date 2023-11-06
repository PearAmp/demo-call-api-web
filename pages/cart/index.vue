<template>
  <div class="Cart">
    <div class="imgheader">
      <h3>HOME CART</h3>
      <h1>MY CART</h1>
    </div>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Product name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="flex">
              <button><v-icon>mdi-close-box-outline</v-icon></button>
              <img width="200px" src="@/static/mock/product-2.png" alt="" />
            </td>
            <td>
              <h3>Bell Pepper</h3>
              <h4 class="txt-label">
                Far far away, behind the word mountains, far from the countries
              </h4>
            </td>
            <td>$4.90</td>
            <td>
              <v-text-field outlined value="1"></v-text-field>
            </td>
            <td>$4.90</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.Cart {
  margin-top: 4rem;
}
.container {
  max-width: 1320px;
}
.imgheader {
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
table {
  width: 100%;
  td {
    padding: 0 2rem;
  }
  .flex {
    display: flex;
    align-items: center;
  }
}
</style>