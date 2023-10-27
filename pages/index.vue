<template>
  <div>
    <div class="header">
      <v-btn>
        <h2>Detail</h2>
      </v-btn>
    </div>

    <div class="container">
      <!-- section 1 -->
      <section>
        <v-row class="banner1">
          <v-col cols="12" md="3" sm="3" v-for="item in content" :key="item.id">
            <BoxMenu
              :imageSrc="item.imageSrc"
              :stylings="item.bg"
              :title="item.title"
              :label="item.label"
            />
          </v-col>
        </v-row>
      </section>

      <!-- section 2 -->
      <section class="mt-10 mb-10">
        <v-row class="vspace">
          <v-col cols="12" md="4" sm="4" class="vflex padding">
            <div v-for="item in boxFood" :key="item.id">
              <BoxItem
                :background-image="item.backgroundImage"
                :textName="item.textName"
              />
            </div>
          </v-col>
          <v-col cols="12" md="4" sm="4" class="padding">
            <div class="shopNow">
              <div class="vflexcol">
                <h2>Vegetables</h2>
                <h3>Protect the health of every home</h3>
                <button>shop now</button>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" sm="4" class="vflex padding">
            <div v-for="item in boxFood2" :key="item.id">
              <BoxItem
                :background-image="item.backgroundImage"
                :textName="item.textName"
              />
            </div>
          </v-col>
        </v-row>
      </section>

      <!-- section 3 -->
      <section class="Product">
        <h3>Featured Products</h3>
        <h1>Our Products</h1>
        <h2>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </h2>
        <v-row>
          <v-col cols="12" md="3" sm="6">
            <ProductPrice />
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <ProductPrice />
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <ProductPrice />
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <ProductPrice />
          </v-col>
        </v-row>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      content: [
        {
          id: 1,
          imageSrc: require('@/static/icon/shipped.png'),
          title: 'FREE SHIPPING',
          label: 'ON ORDER OVER $100',
        },
        {
          id: 2,
          imageSrc: require('@/static/icon/vegetable.png'),
          bg: {
            'background-color': '#dcc698',
          },
          title: 'ALWAYS FRESH',
          label: 'PRODUCT WELL PACKAGE',
        },
        {
          id: 3,
          imageSrc: require('@/static/icon/badge.png'),
          bg: {
            'background-color': '#a2d1e1',
          },
          title: 'SUPERIOR QUALITY',
          label: 'QUALITY PRODUCTS',
        },
        {
          id: 4,
          imageSrc: require('@/static/icon/customer-service.png'),
          bg: {
            'background-color': '#dcd691',
          },
          title: 'SUPPORT',
          label: '24/7 SUPPORT',
        },
      ],
      boxFood: [
        {
          id: 1,
          backgroundImage: require('@/static/mock/fruit.jpeg'),
          textName: 'Fruits',
        },
        {
          id: 2,
          backgroundImage: require('@/static/mock/vegetable.jpeg'),
          textName: 'Vegetables',
        },
      ],
      boxFood2: [
        {
          id: 1,
          backgroundImage: require('@/static/mock/juices.jpeg'),
          textName: 'Juices',
        },
        {
          id: 2,
          backgroundImage: require('@/static/mock/Dried.jpeg'),
          textName: 'Dried',
        },
      ],
    }
  },
}
</script>

<style lang='scss' scoped>
.container {
  max-width: 1320px;
  padding: 0;
}

.header {
  margin-top: 3rem;
  background-image: url('@/static/bg_1.jpg');
  background-color: #cccccc;
  height: 60vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0 5rem 0;
  .v-btn {
    background-color: $color-base;
    color: #ffffff;
    padding: 1rem 3rem;
    border-radius: 2rem;
    h2 {
      font-size: 1rem;
      font-weight: 600;
    }
  }
}
.banner1 {
  margin: 4rem 0;
}
.padding {
  padding: 0;
  align-items: center;
}

.shopNow {
  background-image: url('@/static/bg_2.jpg');
  height: 60vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  .vflexcol {
    text-align: center;
    h2 {
      color: $color-base;
      font-weight: 500;
    }
    h3 {
      color: $color-label;
      padding: 1rem 0;
      font-weight: 400;
    }
    button {
      background-color: $color-base;
      color: #ffffff;
      font-size: 1.25rem;
      padding: 0.25rem 1rem;
      border-radius: 2rem;
    }
    button:hover {
      background-color: #ffffff;
      border: 1px solid $color-base;
      color: $color-base;
    }
  }
}
.vflex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>