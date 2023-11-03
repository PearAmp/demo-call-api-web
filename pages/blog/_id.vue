<template>
  <div class="Blog">
    <div class="imgheader">
      <h3>HOME BLOG</h3>
      <h1>BLOG</h1>
    </div>
    <div class="container">
      <v-row>
        <v-col cols="12" md="8" sm="8">
          <div class="discrip">
            <h1>Organic foods is good for your health</h1>
            <p class="txt-label">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio
              perferendis et doloribus unde architecto optio laboriosam porro
              adipisci sapiente officiis nemo accusamus ad praesentium? Esse
              minima nisi et. Dolore perferendis, enim praesentium omnis, iste
              doloremque quia officia optio deserunt molestiae voluptates soluta
              architecto tempora.
            </p>
            <img src="@/static/mock/fruit.jpeg" alt="" />
          </div>
          <div class="Profile">
            <v-row class="align-center">
              <v-col cols="12" md="2">
                <img src="@/static/mock/fruit.jpeg" alt="" />
              </v-col>
              <v-col cols="12" md="10">
                <h2>Lance Smith</h2>
                <p class="txt-label">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum laboriosam omnis consectetur quas voluptatum inventore
                  est, aspernatur vel maiores sint doloribus nihil vero nam
                  officia quasi, exercitationem, corrupti quam mollitia nulla
                  ipsam! Iste saepe facilis autem? Beatae totam, odit architecto
                </p>
              </v-col>
            </v-row>
          </div>
          <div class="comment">
            <h1>10 Comment</h1>
            <div v-for="item in Comment" :key="item.id">
              <BlogComment
                :Name="item.Name"
                :date="item.date"
                :discript="item.discript"
                :time='item.time'
                :Profile='item.Profile'
              />
            </div>
          </div>
        </v-col>
        <!-- col2 -->
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
          <div class="BlogRecent">
            <h2>Recent Blog</h2>
            <div v-for="item in recent" :key="item.id">
              <BlogRecent
                :recentImg="item.recentImg"
                :recentTitle="item.title"
                :date="item.date"
                :typeUser="item.typeUser"
                :message="item.message"
                class="mb-10"
              />
            </div>
          </div>
          <div class="Tag">
            <h2>Tag Cloud</h2>
            <div class="vflex">
              <div v-for="item in Tag" :key="item.id">
                <button>
                  <h3>{{ item.tag }}</h3>
                </button>
              </div>
            </div>
          </div>
        </v-col>
        <!-- col2 -->
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Id',
  data() {
    return {
      Comment: [
        {
          id: 1,
          Profile: require('@/static/mock/fruit.jpeg'),
          Name: 'John',
          time: '2:21PM',
          date: 'JUNE 27, 2018 ',
          discript:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
        },
         {
          id: 2,
          Profile: require('@/static/mock/fruit.jpeg'),
          Name: 'John',
          time: '2:21PM',
          date: 'JUNE 27, 2018 ',
          discript:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?',
        },
      ],
      Tag: [
        {
          id: 1,
          tag: 'FRUIT',
        },
        {
          id: 2,
          tag: 'TOMETO',
        },
        {
          id: 3,
          tag: 'MANGO',
        },
        {
          id: 4,
          tag: 'APPLE',
        },
        {
          id: 5,
          tag: 'CARROT',
        },
        {
          id: 6,
          tag: 'ORANGE',
        },
        {
          id: 7,
          tag: 'PEPER',
        },
        {
          id: 8,
          tag: 'PEPER',
        },
        {
          id: 9,
          tag: 'PEPER',
        },
      ],
      recent: [
        {
          id: 1,
          recentImg: require('@/static/mock/juices.jpeg'),
          title:
            'Even the all-powerful Pointing has no control about the blind texts',
          date: 'April 09, 2019',
          typeUser: 'Admin',
          message: '19',
        },
        {
          id: 2,
          recentImg: require('@/static/mock/fruit.jpeg'),
          title:
            'Even the all-powerful Pointing has no control about the blind texts',
          date: 'April 09, 2019',
          typeUser: 'Admin',
          message: '19',
        },
        {
          id: 3,
          recentImg: require('@/static/mock/Dried.jpeg'),
          title:
            'Even the all-powerful Pointing has no control about the blind texts',
          date: 'April 09, 2019',
          typeUser: 'Admin',
          message: '19',
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
  margin-top: 4rem;
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
.BlogRecent {
  h2 {
    padding: 2rem 0 1rem 0;
  }
}
.Tag {
  .vflex {
    display: flex;
    flex-wrap: wrap;
  }
  h2 {
    padding-bottom: 1rem;
  }
  button {
    margin-bottom: 0.5rem;
    border: 1px solid $color-label;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-right: 0.5rem;
    &:hover {
      border: 1px solid #000;
    }
    h3 {
      font-weight: 300;
      font-size: 0.8rem;
    }
  }
}
.discrip {
  h1 {
    padding-bottom: 1rem;
    font-weight: 400;
  }
  p {
    font-weight: 450;
  }
  img {
    width: 100%;
    height: 100vh;
  }
}
.Profile {
  background-color: #f7f6f2;
  margin: 2rem 0;
  padding: 1rem;
  .col-md-2 {
    justify-content: center;
    display: flex;
  }
  img {
    width: 100%;
    height: 15vh;
  }
  h2 {
    padding-bottom: 0.5rem;
    font-weight: 450;
  }
  p {
    font-weight: 450;
  }
}
</style>