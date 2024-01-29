<template>
  <div class="container">
    <LoadingProcess :loading="loading" />
    <h1 class="text-center mb-10"><strong>Json Api</strong></h1>
    <v-simple-table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Street(address)</th>
          <th>Phone</th>
          <th>Website</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in userlist" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address.street }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.website }}</td>
          <td>
            <v-icon color="success" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon color="error" @click="deleteItem(item.id)"
              >mdi-trash-can</v-icon
            >
            <v-btn color="primary" text @click="seeDetail(item.id)"
              >GotoDetail</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-dialog v-model="dialog" max-width="800" persistent>
      <v-card>
        <v-card-title class="Title">Edit</v-card-title>
        <v-card-text class="pa-10">
          <v-text-field
            outlined
            label="Username"
            v-model="editData.username"
          ></v-text-field>
          <v-text-field
            outlined
            label="Email"
            v-model="editData.email"
          ></v-text-field>

          <v-text-field
            outlined
            label="Phone"
            v-model="editData.phone"
          ></v-text-field>
          <v-text-field
            outlined
            label="Website"
            v-model="editData.website"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="error" @click="Close">cancle</v-btn>
          <v-btn color="primary" @click="Save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import randomApi from '~/assets/api/randomApi'
export default {
  name: 'CallDataPage',
  data() {
    return {
      userlist: [],
      dialog: false,
      editData: {},
      loading: true,
    }
  },
  computed: {},
  mounted() {
    this.getDataRandom()
  },
  methods: {
    async getDataRandom() {
      this.loading = true
      try {
        const data = await randomApi.getAll()
        this.userlist = data
        this.loading = false
      } catch (error) {
        this.loading = false
        this.$swal({
          icon: 'error',
          text: error.response.data.message,
          confirmButtonText: 'ตกลง',
        })
      }
    },
    editItem(item) {
      this.editData = item.id
      this.editData = Object.assign({}, item)
      this.dialog = true
    },

    async createItem() {
      const payload = {
        username: this.editData.username,
        email: this.editData.email,
        phone: this.editData.phone,
        website: this.editData.website,
      }
      try {
        const data = await randomApi.createData(payload)
        console.log('Post', data)
        this.Close()
        this.getDataRandom()
      } catch (error) {
        this.loading = false
        this.$swal({
          icon: 'error',
          text: error.response.data.message,
          confirmButtonText: 'ตกลง',
        })
      }
    },

    async updateItem() {
      // const payload = {
      //   username: this.editData.username,
      //   email: this.editData.email,
      //   phone: this.editData.phone,
      //   website: this.editData.website,
      // }
      try {
        const data = await randomApi.updateById(this.editData)
        console.log('Update', data)
        this.Close()
        this.getDataRandom()
      } catch (error) {
        this.loading = false
        this.$swal({
          icon: 'error',
          text: error.response.data.message,
          confirmButtonText: 'ตกลง',
        })
      }
    },

    Save() {
      this.createItem()
      this.updateItem()
      this.dialog = false
    },
    async comfirmDelete(id) {
      try {
        const data = await randomApi.delById(id)
        console.log('Delete', data)
        this.getDataRandom()
      } catch (error) {
        this.loading = false
        this.$swal({
          icon: 'error',
          text: error.response.data.message,
          confirmButtonText: 'ตกลง',
        })
      }
    },

    deleteItem(item) {
      this.$swal({
        icon: 'info',
        title: 'ยืนยันการลบ',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `ลบ`,
        cancelButtonText: `ปิด`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true
          this.comfirmDelete(item)
        }
      })
    },
    Close() {
      this.dialog = false
    },
    seeDetail(a) {
      this.$router.push({ path: `callData/${a}/detail` })
    },
  },
}
</script>

<style lang="scss" scoped>
.Title {
  background-color: $color-base;
  color: #fff;
}
h1 {
  margin-top: 3rem;
}
</style>