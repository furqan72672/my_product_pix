<template>
  <v-app>
    <v-main class="align-center">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import SignIn from './views/SignIn.vue'

export default {
  name: 'App',

  components: {
  //   SignIn,
  },

  data: () => ({
    //
  }),
};
</script>
