<template>
  <div class="col-xs-12 col-sm-6">
      <p v-if="!server">Please select a server</p>
      <p v-else>Server # {{server.id}} selected, Status: {{server.status}}</p>
      <button @click="resetStatus" v-if="server">Change to normal</button>
  </div>
</template>
<script>
  import {serverBus} from '../../main';
  export default {
      data:function () {
          return{
              server:null,
          }
      },
      methods:{
          resetStatus(){
              this.server.status ='Normal';
          }
      },
      created(){
          serverBus.$on('severSelected', (server) =>{
              this.server = server;
          });
      },

  }
</script>
<style scoped>
  div {
    border: 1px solid red;
  }
</style>