<template>
  <div class="page">
    <LoadingProcess :loading="loading" />
    <div class="Dialog">
      <v-dialog v-model="dialog" max-width="800" persistent>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" color="success">+ Add</v-btn>
        </template>
        <v-card>
          <v-card-title class="Title">{{ formTitle }}</v-card-title>
          <v-card-text class="pa-5">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  outlined
                  label="title"
                  v-model="editItemData.title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  label="body"
                  v-model="editItemData.body"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="error" @click="Close">cancle</v-btn>
            <v-btn color="primary" @click="Save">save</v-btn>
            <div class="pb-5"></div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- Table -->
    <v-simple-table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Title</th>
          <th>Body</th>

          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in studentsList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.userId }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td>
            <div class="d-flex justify-center">
              <v-icon color="primary" @click="EditItem(item)"
                >mdi-pencil</v-icon
              >
              <div class="pl-4"></div>
              <v-icon color="error" @click="Delete(item.id)"
                >mdi-trash-can-outline</v-icon
              >
            </div>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
import studentsApi from '~/assets/api/studentsApi'
export default {
  name: 'Lol',

  data() {
    return {
      loading: true,
      studentsList: [],
      dialog: false,
      editIndex: -1,
      editItemData: {
        id: '',
        title: '',
        body: '',
      },
      defaultItem: {
        id: -1,
        title: '',
        body: '',
      },
    }
  },
  computed: {
    formTitle() {
      return this.editIndex === -1 ? 'Add' : 'Edit'
    },
  },
  mounted() {
    this.getStudentsData()
  },
  methods: {
    async getStudentsData() {
      this.loading = true
      try {
        const data = await studentsApi.getAll()
        this.studentsList = data
        // console.log('student', data)
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
    Close() {
      this.dialog = false
      this.editIndex = -1
      this.editedItem = Object.assign({}, this.defaultItem)
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
      })
    },
    EditItem(item) {
      this.editIndex = item.id
      this.editItemData = Object.assign({}, item)
      this.dialog = true
    },
    async CreateItem() {
      const payload = {
        title: this.editItemData.title,
        body: this.editItemData.body,
      }
      try {
        const data = await studentsApi.createData(payload)
        this.Close()
        this.getStudentsData()
        console.log('Post', data)
      } catch (error) {
        this.loading = false
        this.$swal({
          icon: 'error',
          text: error.response.data.message,
          confirmButtonText: 'ตกลง',
        })
      }
    },
    async UpdateItem() {
      try {
        const data = await studentsApi.updateById(
          this.editIndex,
          this.editItemData
        )
        this.Close()
        this.getStudentsData()
        console.log('Update', data)
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
      this.dialog = false
      this.loading = true
      if (this.editIndex > -1) {
        this.UpdateItem()
      } else {
        this.CreateItem()
      }
    },
    async confirmDelete(id) {
      try {
        const data = await studentsApi.delById(id)
        console.log('delete', data)
        this.Close()
        this.getStudentsData()
      } catch (error) {
        this.loading = false
        this.$swal({
          icon: 'error',
          text: error.response.data.message,
          confirmButtonText: 'ตกลง',
        })
      }
    },
    Delete(item) {
      this.$swal({
        icon: 'info',
        title: 'ลบ',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `ลบ`,
        cancelButtonText: `ปิด`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.loading = true
          this.confirmDelete(item)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  margin-top: 10rem;
}
.Title {
  background-color: $color-base;
  color: #fff;
}
</style>