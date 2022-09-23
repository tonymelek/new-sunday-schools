<template>
  <div class="d-flex justify-content-around mt-5">
    <router-link v-if="this.role==='admin'" to="/admin"><button class="btn btn-primary">Admin</button></router-link>
    <router-link to="/attendance"><button class="btn btn-primary">Attendance</button></router-link>
  </div>
</template>

<script>
  export default {
    name:'home-page',
    data:()=>({
      role:''
    }),
    computed:{

    },
      async mounted(){
        const {claims:{role}}=await this.$store.state.loggedInUser.getIdTokenResult();
        this.role=role;
        if(!role) return this.$router.push('/myProfile')
      }

  }
</script>

<style scoped>

</style>