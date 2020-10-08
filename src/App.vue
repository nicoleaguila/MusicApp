<template>
  <v-app>
    <navbar-comp></navbar-comp>

    <v-main>
<router-view></router-view>
    </v-main>
    <footer-comp></footer-comp>
  </v-app>
</template>

<script>
import FooterComp from '@/components/Footer'
import NavbarComp from '@/components/Navbar'
export default {
  name: 'App',

  components: {
    NavbarComp,
    FooterComp
  },

  data: () => ({
    //
  }),
};
</script>
