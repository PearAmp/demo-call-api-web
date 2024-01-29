<template>
  <div class="container">
    <LoadingProcess :loading="loading" />
    <h1>Detail</h1>
    <div>
      <h2>User Name : {{ listDetail.username }}</h2>
      <h2>Email : {{ listDetail.email }}</h2>
      <h2>Street : {{ lisStreet.street }}</h2>
      <h2>Phone : {{ listDetail.phone }}</h2>
      <h2>Website : {{ listDetail.website }}</h2>
    </div>
  </div>
</template>

<script>
import randomApi from '~/assets/api/randomApi'
export default {
  name: 'Detail',
  data() {
    return {
      loading: true,
      idRoute: '',
      listDetail: {},
      lisStreet: {},
    }
  },
  mounted() {
    this.idRoute = this.$route.params.id
    this.getDataDetail()
  },
  methods: {
    async getDataDetail() {
      this.loading = true
      try {
        const data = await randomApi.getById(this.idRoute)
        this.listDetail = data
        this.lisStreet = data.address
        console.log('detail', data)
        this.loading = false
      } catch (error) {
        this.$swal({
           icon: "error",
          text: error.response.data.message,
          confirmButtonText: "ตกลง",
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
h1 {
  margin-top: 4rem;
}
</style>