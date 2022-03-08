<template>
    <Auth>
        <div slot="form" style="width:50%;" class="my-auto mx-10 my-0">
            <v-card-title class="justify-center" style="font-weight: 900; text-align: center;" >Welcome</v-card-title>
            <v-card-subtitle class="justify-center" style="font-weight: 500; text-align: center;" >Sign In as Administrator</v-card-subtitle>
            <v-form class="d-flex flex-column">
                <span class="mt-4" style="color:black; font-weight: 900; font-size: 75%;">Email</span>
                <v-text-field class="mt-0" required type="email"></v-text-field>
                <h6 class="mt-4" style="color:black; font-weight: 900; font-size: 75%;">Password</h6>
                <v-text-field class="mt-0" required type="password"></v-text-field>
                <v-btn text x-small class="mt-0" style="align-self: flex-start; fon" plain top :ripple="false">Forget Password?</v-btn>
                <v-btn large color="#c80000" style="color:white; font-size: 75%; font-weight:300;">Sign In</v-btn>
            </v-form>
        </div>
    </Auth>
</template>


<script>
import Auth from '../components/Auth.vue'

export default {
    name:'SignIn',
    components:{
        Auth,
    }
}
</script>


<style scoped>
.abc{
    align-self: flex-start;
    color: #c80000;
    
    
}
</style>