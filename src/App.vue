<template>
  <div class="container">

    <header-server></header-server>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Servers from './Servers.vue'
  import ServerDetails from './ServerDetail.vue'

  export default {
      components:{
          'app-servers': Servers,
          'app-server-details': ServerDetails
      }
  }
</script>

<style>

</style>
