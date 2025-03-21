<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="localePath({ name: 'index' })">{{ header.app }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="localePath({ name: 'page1' })">{{ header.link.page_1 }}</b-nav-item>
          <b-nav-item :to="localePath({ name: 'page2' })">{{ header.link.page_2 }}</b-nav-item>
          <b-nav-item :to="localePath({ name: 'page3' })">{{ header.link.page_3 }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          
          <b-nav-item-dropdown :text="`${header.lang}`" right>
            <b-dropdown-item 
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              {{ locale.name }}
            </b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'headerItem',
  data: () => ({
    path: 'Data'
  }),
  computed: {
    header () {
      return this.$t('header')
    },
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>