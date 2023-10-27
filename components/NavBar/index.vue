<template>
  <div>
    <div class="container">
      <v-row>
        <v-col cols="12" md="6" sm="6">
          <nuxt-link to="/"><h1>VEGEFOODS</h1></nuxt-link>
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <v-list class="vflex">
            <v-list-item>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-list-item>
                  <v-list-item-title v-bind="attrs" v-on="on">
                    SHOP
                  </v-list-item-title>
                </v-list-item>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-list-item>
              <v-list-item-title>ABOUT</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>BLOG</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>CONTACT</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cart</v-icon>
                <h5>[0]</h5>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </div>
    <div class="Navmedia">
        <v-app-bar color="deep-purple" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>Title</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      drawer: false,
      group: null,
    }
  },
}
</script>

<style lang='scss' scoped>
.container {
  max-width: 1320px;
  padding: 0;
}
h1 {
  font-weight: 700;
  color: $color-base;
}
.vflex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.col-md-6 {
  align-items: center;
  display: flex;
}
.v-list-item {
  margin: 0 1rem;
}
.v-list-item__icon {
  align-items: center;
}
.Navmedia {
  display: none;
}
::v-deep {
}
@media screen and (max-width: 600px) {
  .container {
    display: none;
  }
  .Navmedia {
    display: block;

  }
}
</style>