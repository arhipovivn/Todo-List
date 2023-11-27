<template>
  <v-app dark >
  <div class="error">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
      
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      <span style="    position: relative;
    padding: 14px;
    background-color: #ED1B2F;
    color: rgb(255, 255, 255);
    border-radius: 6px;
    top: 37px;" > Главная страница</span>
    </NuxtLink>
  </div>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Страница не найдена.',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.error{
  width: 100%;
  height: 100%;
  background-color:white !important;
  width: 100%;
    height: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
