<template>
    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" to='/' exact md-label="Home" md-icon="home"></md-tab>
      <md-tab id="tab-pages" to='/adverts'  md-label="Adverts" md-icon="pages"></md-tab>
      <md-tab v-if="!loggedIn" id="tab-posts" to='/login' md-label="Login" md-icon="login"></md-tab>
      <md-tab v-if="!loggedIn" id="tab-favorites" to='/register' md-label="Register" md-icon="favorite"></md-tab>
      <md-tab v-if="loggedIn" id="tab-asd" to='/dashboard' md-label="Dashboard" md-icon="dashboard"></md-tab>
      <md-tab v-if="loggedIn" id="tab-umbaje" to='/profile' md-label="Profil" md-icon="face"></md-tab>
    </md-tabs>
</template>

<script>
import { bus } from '../app';
export default {
  data(){
    return{
      loggedIn : false
    }
  },
}

</script>

<style>

</style>