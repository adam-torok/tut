<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="login">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-content>
      
      
      <md-field>
         <label>Email</label>
         <md-input name='email' v-model='form.email'></md-input>
      </md-field>

       <md-field>
         <label>Password</label>
         <md-input name='password' v-model='form.password'></md-input>
      </md-field>

        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-primary">Login</md-button>
        </md-card-actions>
      </md-card>

    </form>

    <div class="loader" v-if="loading">
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    data: () => ({
      form: {
         email: null,
         password: null,
      },
      loading : false,
      errors:[],
   }),
  computed: {
    ...mapGetters([
      'isLogged'
    ])
  },
   methods:{
     logout () {
      this.$store.dispatch('logout')
    },
      login(){
        this.$store
        .dispatch('login', {
          email: this.form.email,
          password: this.form.password
        })
        .then(() => {
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          console.log(err)
        })
      },
   }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>