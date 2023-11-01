<template>
  <div class="About">
    <div class="imgheader">
      <h3>HOME ABOUT US</h3>
      <h1>ABOUT US</h1>
    </div>
    <div class="container">
      <v-row class="align-center">
        <v-col cols="12" md="4" sm="3" class="background"> </v-col>
        <v-col cols="12" md="8" sm="9" class="pa-12">
          <h1>Welcome to Vegefoods an eCommerce website</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her, made her drunk
            with Longe and Parole and dragged her into their agency, where they
            abused her for their.
          </p>
          <button>Shop now</button>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
     
    }
  },
}
</script>

<style lang="scss" scoped>
.About {
  margin-top: 4rem;
  background-color: #f7f6f2;
}
.container {
  max-width: 1320px;
  width: 100%;
  img {
    width: 100%;
    height: 40vh;
  }
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
.background {
  background-image: url('@/static/bg-about.png');
  background-size: cover;
  height: 55vh;
  background-position: center;
}
h1 {
  font-size: 2.5rem;
  font-weight: 600;
  padding-bottom: 1rem;
}
p {
  color: $color-label;
  font-size: 1.15rem;
  font-weight: 400;
}
button {
  background-color: $color-base;
  color: #ffffff;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
}
</style>