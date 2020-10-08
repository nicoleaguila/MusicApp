<template>
  <div>
    <v-app-bar color="black" dense dark>
      <v-toolbar-title><v-icon>mdi-spotify</v-icon>Spotify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/playlist">Playlist</v-btn>
      <v-btn text to="/explorar"><v-icon>mdi-magnify</v-icon>Explora</v-btn>   
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data(){
    return{
      
    }
  }
}
</script>
