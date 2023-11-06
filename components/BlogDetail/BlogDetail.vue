<template>
  <div class="Detail">
    <v-row class="align-center">
      <v-col cols="12" md="4" sm="4">
        <img :src="imgBlog" />
      </v-col>
      <v-col cols="12" md="8" sm="8">
        <div class="vflex">
          <h4>July 20, 2019 Admin</h4>
          <v-icon color="grey" size="15px">mdi-message-text</v-icon>
          <span>3</span>
        </div>
        <h2>{{ title }}</h2>
        <p>{{ discript }}</p>
        <nuxt-link to="/blog/_id">
          <button>Read more</button>
        </nuxt-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'BlogDetail',
  props: {
    title: String,
    discript: String,
    imgBlog: String
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.Detail {
  margin: 1rem 0;
  img {
    width: 100%;
    height: 25vh;
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
h2 {
  padding: 1rem 0;
}
p {
  color: $color-label;
  font-size: 1.15rem;
}
button {
  background-color: $color-base;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 500;
}
</style>