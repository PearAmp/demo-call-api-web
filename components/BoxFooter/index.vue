<template>
  <div class="Footer">
    <div class="FootHead">
      <div class="container">
        <v-row class="align-center">
          <v-col cols="12" md="6" sm="6">
            <h2>Subcribe to our Newsletter</h2>
            <h3 class="label">
              Get e-mail updates about our latest shops and special offers
            </h3>
          </v-col>
          <v-col cols="12" md="6" sm="6">
            <div class="vflex">
              <v-text-field solo></v-text-field>
              <button>Subscribe</button>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="FoodSecond">
      <div class="container">
        <v-row>
          <v-col cols="12" md="3" sm="6">
            <div>
              <h3>Vegefoods</h3>
              <h4>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </h4>
            </div>
            <div class="social">
              <div class="box">
                <v-icon color="#000">mdi-twitter</v-icon>
              </div>
              <div class="box ml-3 mr-3">
                <v-icon color="#000">mdi-facebook</v-icon>
              </div>
              <div class="box">
                <v-icon color="#000">mdi-instagram</v-icon>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <h3>Menu</h3>
            <ul>
              <li>Shop</li>
              <li>About</li>
              <li>Journal</li>
              <li>Contact Us</li>
            </ul>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <h3>Help</h3>
            <ul>
              <li>Shipping Information <span>FAQs</span></li>
              <li>Returns & Exchange <span>Contact</span></li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </v-col>
          <v-col cols="12" md="3" sm="6">
            <h3>Have a Questions?</h3>
            <div class="flex align-start">
              <v-icon color="black" size="20px">mdi-map-marker</v-icon>
              <h4>123 บ้านศาลา ต.สิ อ.ขุนหาญ จ.ศรีสะเกษ 33150</h4>
            </div>
            <div class="flex">
              <v-icon color="black" size="20px">mdi-phone</v-icon>
              <h4>0945-399-4306</h4>
            </div>
             <div class="flex">
              <v-icon color="black" size="20px">mdi-email</v-icon>
              <h4>info@yourdomain.com</h4>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoxFooter',
}
</script>

<style lang="scss" scoped>
.FootHead {
  background-color: #f7f6f2;
  padding: 3rem 0;

  .label {
    color: $color-label;
  }
  .vflex {
    display: flex;
    align-items: center;
    button {
      background-color: $color-base;
      color: #ffffff;
      min-height: 48px;
      padding: 0 1rem;
    }
  }
}

.FoodSecond {
  padding: 3rem 0;
  h3 {
    font-weight: 500;
    padding-bottom: 1rem;
  }
  h4 {
    font-weight: 400;
  }
  .social {
    display: flex;
    align-items: center;
    margin-top: 3rem;

    .box {
      background-color: rgba(0, 0, 0, 0.02);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 0.5rem;
    }
  }
  ul {
    list-style: none;
    padding-left: 0;
    li {
      padding-bottom: 1rem;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    .v-icon {
      margin-right: 0.5rem;
    }
  }
}
.container {
  max-width: 1320px;
}

::v-deep {
  // Text Field
  .v-messages {
    min-height: 0;
  }
  .v-text-field.v-text-field--enclosed .v-text-field__details {
    margin-bottom: 0;
  }
  .v-text-field__details {
    min-height: 0;
  }
  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
    > .v-input__control
    > .v-input__slot {
    box-shadow: none;
  }
  .v-input__slot {
    margin-bottom: 0;
  }
  // Text Field
}
</style>
