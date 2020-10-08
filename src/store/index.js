import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: [],
    album: undefined
  },
  mutations: {
    GET_ALBUMS(state, albums){
      state.albums = albums
    },
    GET_ALBUM(state, album){
      state.album = album
    }
  },
  actions: {
    getAlbums({commit}){
      Axios.get('https://api.jamendo.com/v3.0/albums/?client_id=105e2031').then((response) => {
        commit('GET_ALBUMS', response.data.results)
      })
    },
    // getAlbum({commit}, id){
    //   Axios.get(`https://api.jamendo.com/v3.0/albums/?client_id=105e2031/${id}`).then((response) => {
    //     commit('GET_ALBUM', response.data)
    //   })
    // }
   
  },
  modules: {
  }
})
