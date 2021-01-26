<template>
  <div>
    <form novalidate class="md-layout">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-content>
          <md-field>
            <label>First name</label>
            <md-input name='first_name' v-model='form.first_name'></md-input>
            <span class="md-error" v-if="errors.first_name">{{errors.first_name[0]}}</span>
          </md-field>

          <md-field>
            <label>Last name</label>
            <md-input name='last_name' v-model='form.last_name'></md-input>
            <span class="md-error" v-if="errors.last_name">{{errors.last_name[0]}}</span>
          </md-field>

          <md-field>
            <label>Email</label>
            <md-input name='email' v-model='form.email' type='email'></md-input>
            <span class="md-error" v-if="errors.email">{{errors.email[0]}}</span>
          </md-field>

          <md-field>
            <label>Password</label>
            <md-input name='password' v-model='form.password' type='password'></md-input>
            <span class="md-error" v-if="errors.password">{{errors.password[0]}}</span>
          </md-field>

          <md-field>
            <label>Password Confirm</label>
            <md-input name='password_confirmation' v-model="form.password_confirmation" type='password'></md-input>
            <span class="md-error" v-if="errors.password">{{errors.password[0]}}</span>
          </md-field>

          <md-field>
            <label>City</label>
            <md-input name='city' v-model="form.city"></md-input>
            <span class="md-error" v-if="errors.city">{{errors.city[0]}}</span>
          </md-field>

          <md-field>
            <label>County</label>
            <md-input name='county' v-model='form.county'></md-input>
            <span class="md-error" v-if="errors.county">{{errors.county[0]}}</span>
          </md-field>

          <md-field>
            <label>Zip</label>
            <md-input name='zip' v-model='form.zip'></md-input>
            <span class="md-error" v-if="errors.zip">{{errors.zip[0]}}</span>
          </md-field>
      </md-card-content>

        <md-card-actions>
          <md-button type="submit" @click.prevent="saveForm" class="md-primary" :disabled="sending">Create user</md-button>
        </md-card-actions>
      </md-card>
    
      <div class="loader" v-if="sending">
          <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>

      <md-snackbar :md-active.sync="userRegistered"><a href="/login">Sikeres regisztracio, bejelentkezes</a></md-snackbar>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => ({
      form: {
        first_name: null,
        last_name: null,
        email: null,
        password : null,
        password_confirmation : null,
        county : null,
        city : null,
        zip : null,
      },
      userRegistered: false,
      sending: false,
      errors:[],
   }),
   methods:{
      saveForm(){
        this.sending = true;
         axios.post('api/register',this.form).then(() =>{
            this.sending = false;
            this.userRegistered = true;
         }).catch((error) =>{
            this.sending = false;
            module.errors = error.response.data.errors;
            console.log(module.errors);
         })
      }
   }
  }
</script>

<style lang="scss">
body{
  background: white;
}
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  .loader{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    position: absolute;
    justify-content: center;
    z-index: 99;
    background: white;
    top: 0;
    align-content: center;
    align-items: center;
  }
</style>