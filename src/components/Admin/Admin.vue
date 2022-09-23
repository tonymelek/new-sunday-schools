<template>
    <div>
        <h1>Admin Page</h1>
        <p v-if="loading">Downloading current users data</p>
        <p v-for="user in users" :key="user.uid">
            <span v-if="user.displayName">
            {{user.displayName}} -{{user.customClaims?.role}}
        </span>
        <span v-else>
            {{user.email}} has not changed his display name
        </span>
        </p>
    </div>
</template>

<script>
    import axios from'axios';
    export default {
        name:'admin-page',
        data:()=>({
            users:[],
            loading:true
        }),
        async mounted(){
            const {claims:{role}}=await this.$store.state.loggedInUser.getIdTokenResult();
            if(role!=='admin') return this.$router.push('/');
            const {data:{users}}=await axios.post(' https://i1ejf41yfi.execute-api.ap-southeast-2.amazonaws.com/dev',{user:this.$store.state.loggedInUser})
            this.users=users;
            this.loading=false;
        }

    }
</script>

<style scoped>

</style>