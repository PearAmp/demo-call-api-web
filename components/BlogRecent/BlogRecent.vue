<template>
  <v-row>
    <v-col cols="3">
      <img :src="recentImg" alt="" />
      <!-- <img src="@/static/mock/fruit.jpeg" alt=""> -->
    </v-col>
    <v-col cols="9">
      <h2>{{ recentTitle }}</h2>
      <div class="vflex">
        <div class="vflex">
          <v-icon size="20">mdi-calendar-month-outline</v-icon>
          <h5 class="txt-label">{{ date }}</h5>
        </div>
        <div class="vflex pl-2 pr-2">
          <v-icon size="20">mdi-account</v-icon>
          <h5 class="txt-label">{{ typeUser }}</h5>
        </div>
        <div class="vflex">
          <v-icon size="20">mdi-message-text-outline</v-icon>
          <h5 class="txt-label">{{ message }}</h5>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BlogRecent',
  props: {
    recentImg: String,
    recentTitle: String,
    date: String,
    typeUser: String,
    message: String
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.vflex {
  display: flex;
  align-items: stretch;
}

img {
  max-width: 100px;
  height: 100px;
}
h2 {
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.col-3 {
  padding: 0;
}
.col-9 {
  padding: 0 1rem;
}
</style>