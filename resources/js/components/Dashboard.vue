<template>
 <div>
<h1>Dashboard</h1>
  Name : {{user.first_name}}
  Name : {{user.last_name}}
<button @click.prevent="logout">Logout</button>
 <md-speed-dial class="md-bottom-left" md-direction="bottom">
      <md-speed-dial-target>
        <md-icon class="md-morph-initial">add</md-icon>
        <md-icon class="md-morph-final">edit</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>note</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
 </div>
</template>

<script>
import { bus } from '../app';
export default {
   data(){
      return{
         user : ''
      }
   },
   methods:{
      logout(){
         axios.post('/api/logout').then(()=>{
            this.$router.push({ name: "Home"}); 
         })
      }
    },
   mounted(){
      axios.get('/api/user',{withCredentials: true}).then((res)=>{
         this.user = res.data;
      })
   }
}
</script>

<style>

</style>