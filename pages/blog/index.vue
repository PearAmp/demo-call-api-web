<template>
  <div class="Blog">
    <div class="imgheader">
      <h3>HOME BLOG</h3>
      <h1>BLOG</h1>
    </div>
    <div class="container">
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <div v-for="item in Blog" :key="item.id">
            <BlogDetail
              :title="item.title"
              :discript="item.discript"
              :imgBlog="item.imgBlog"
            />
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="4">
          <div class="Search">
            <v-text-field
              placeholder="Search"
              outlined
              append-icon="mdi-magnify"
            />
          </div>
          <div class="Cagtegories">
            <h2>Categories</h2>
            <div v-for="item in Cagtegories" :key="item.id">
              <div class="vflex">
                <h3>{{ item.type }}</h3>
                <h3 class="txt-label">({{ item.quantity }})</h3>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      Blog: [
        {
          id: 1,
          imgBlog: require('@/static/mock/Dried.jpeg'),
          title:
            'Even the all-powerful Pointing has no control about the blind texts',
          discript:
            'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },
        {
          imgBlog: require('@/static/mock/fruit.jpeg'),
          id: 2,
          title:
            'Even the all-powerful Pointing has no control about the blind texts',
          discript:
            'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        },
      ],
      Cagtegories: [
        {
          id: 1,
          type: 'Vegetables',
          quantity: '12',
        },
        {
          id: 2,
          type: 'Fruits',
          quantity: '22',
        },
         {
          id: 3,
          type: 'Juice',
          quantity: '37',
        },
         {
          id: 4,
          type: 'Dries',
          quantity: '42',
        },
      ],
    }
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
.Cagtegories {
  h2 {
    padding-bottom: 1rem;
  }
  .vflex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dotted $color-base;
    h3 {
      padding: 0.5rem 0;
    }
  }
}
</style>