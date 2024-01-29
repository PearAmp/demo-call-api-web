<template>
  <v-overlay id="loading" :value="loading">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "LoadingProcress",
  props: {
    loading: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped></style>
