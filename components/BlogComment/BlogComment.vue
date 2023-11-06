<template>
  <div class="comment">
    <v-row>
      <v-col cols="1">
        <img :src="Profile" alt="" />
      </v-col>
      <v-col cols="11">
        <h2>{{ Name }}</h2>
        <h4>{{ date }} AT <span> {{time}}</span> </h4>
        <p class="txt-label">{{ discript }}</p>
        <button>REPLY</button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'BlogComment',
  props: {
    Name: String,
    date: String,
    discript: String,
    time: String,
Profile: String
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.comment {
  margin: 1rem 0;
  img {
    width: 70px;
    height: 70px;
    border-radius: 100%;
  }
  h4 {
    color: #CCC;
  }
  p {
    font-weight: 450;
  }
  .col-11 {
    padding-left: 3rem;
  }
}
button {
  background-color: #e6e6e6;
  padding: 0.5rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: #000;
    color: #ffffff;
  }
}
</style>