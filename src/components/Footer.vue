<template>
  <v-footer dark
    color="black" padless>
    <v-row justify="center" no-gutters>
      <v-btn text>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>    
      <v-col
        class="black py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Spotify prueba</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
