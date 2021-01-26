
require('./bootstrap');

window.Vue = require('vue').default;
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router';

import Routes from './routes'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(VueMaterial)
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.component('navbar-component', require('./components/Navbar.vue').default);

export default new Vuex.Store({
  state: {
    user: null
  },

  mutations: {
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },

    clearUserData () {
      localStorage.removeItem('user')
      location.reload()
    }
  },

  actions: {
    login ({ commit }, credentials) {
      return axios
        .post('/login', credentials)
        .then(({ data }) => {
          commit('setUserData', data)
        })
    },

    logout ({ commit }) {
      commit('clearUserData')
    }
  },

  getters : {
    isLogged: state => !!state.user
  }
})

export const bus = new Vue();

const app = new Vue({
    el: '#app',
    router: new VueRouter(Routes),
    created () {
  const userInfo = localStorage.getItem('user')
  if (userInfo) {
    const userData = JSON.parse(userInfo)
    this.$store.commit('setUserData', userData)
  }
},

});
