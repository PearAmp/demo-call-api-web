<template>
  <div class="header">
    <h2>a = {{total}}</h2>
  </div>
</template>

<script>
export default {
  name: 'PearPage',
  data () {
    return {
      first: 1,
      second: 2,
    }
  },
   computed: {
    total () {
      return this.first * this.second
    }
    
  },
  mounted () {
  },
 
    methods: {
    
  }

}
</script>

<style lang="scss" scoped>
.header {
  margin-top: 4rem;
}
</style>