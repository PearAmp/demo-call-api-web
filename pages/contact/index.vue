<template>
  <div class="contact">
    <div class="imgheader">
      <h3>HOME CONTACT</h3>
      <h1>CONTACT</h1>
    </div>
    <div class="container">
      <div class="mt-10 mb-10">
        <v-row>
          <v-col cols="12" md="3" sm="6" v-for="item in block" :key="item.id">
            <BlockContact :title="item.title" :detail="item.detail" />
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col cols="12" md="6">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.8367441037904!2d104.49721547602701!3d14.608374185878937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3116d383e35ef979%3A0x52f5b8a21d44eabf!2sDEV%20MAEW%20MAEW!5e0!3m2!1sth!2sth!4v1699262315104!5m2!1sth!2sth"
              width="100%"
              height="540"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="Form">
            <v-text-field outlined placeholder="Your Name"></v-text-field>
            <v-text-field outlined placeholder="Your Email"></v-text-field>
            <v-text-field outlined placeholder="Your Subject"></v-text-field>
            <v-textarea outlined placeholder="Message"></v-textarea>
            <button>Send Message</button>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import BlockContact from '~/components/BlockContact/BlockContact.vue'
export default {
  components: { BlockContact },
  name: 'Contact',
  data() {
    return {
      block: [
        {
          id: 1,
          title: 'Address',
          detail: '30 ม.12 ต.กันทรอม อ.ขุนหาญ จ.ศรีสะเกษ 33150',
        },
        {
          id: 2,
          title: 'Phone',
          detail: '+ 1235 2355 98',
        },
        {
          id: 3,
          title: 'Email',
          detail: 'info@yoursite.com',
        },
        {
          id: 4,
          title: 'Website',
          detail: 'yoursite.com',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.contact {
  margin-top: 4rem;
  background-color: #f7f6f2;
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
.Form {
  background-color: #ffffff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .v-text-field {
    width: 100%;
  }
  button {
    background-color: $color-base;
    color: #ffffff;
    padding: 0.5rem 2rem;
    border-radius: 2rem;
  }
}
</style>