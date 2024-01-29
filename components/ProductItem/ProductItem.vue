<template>
  <div>
    <v-row>
      <v-col cols="12" md="4" sm="4" v-for="item in product" :key="item.id">
        <div class="product">
          <img :src="item.img" alt="" />
          <h2>{{ item.name }}</h2>
          <p>
            {{ item.discript }}
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  data() {
    return {
      product: [
        {
          id: 1,
          img: require('@/static/mock/Dried.jpeg'),
          name: 'iiiii',
          discript: 'opop[o[o[kpjkjk]]]',
        },
        {
          id: 2,
          img: require('@/static/mock/Dried.jpeg'),
          name: '000000',
          discript: 'o555555',
        },
        {
          id: 3,
          img: '@/static/mock/Dried.jpeg',
          name: '000000',
          discript: 'o555555',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.product {
  img {
    width: 200px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>