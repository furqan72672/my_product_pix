<template>
    <AppTheme>
        <div slot="drawerItems">
           <v-row class="my-0">
                <v-col class="d-flex justify-center">
                    <v-avatar rounded size="60" ><img src="../assets/avatar.png"/></v-avatar>
                </v-col>
            </v-row>
            <v-row class="justify-center">
                    <span class="subtitle white--text font-weight-medium">Main Admin</span>
                    <span class="white--text font-weight-light">mainadmin@myproductpixx.com</span>
            </v-row>
            <v-list dense class="mt-4">
                <v-list-item>
                    <v-list-item-icon><v-icon color="white">mdi-home-outline</v-icon></v-list-item-icon>
                    <v-list-item-title class="white--text">Home</v-list-item-title>
                    <v-list-item-action><v-icon color="white">mdi-chevron-right</v-icon></v-list-item-action>
                </v-list-item>
                <v-list-item to="/categories">
                    <v-list-item-icon><v-icon color="white">mdi-checkbox-multiple-blank-outline</v-icon></v-list-item-icon>
                    <v-list-item-title class="white--text">Categories</v-list-item-title>
                    <v-list-item-action><v-icon color="white">mdi-chevron-right</v-icon></v-list-item-action>
                </v-list-item>
                <v-list-item to="/products">
                    <v-list-item-icon><v-icon color="white">mdi-dots-grid</v-icon></v-list-item-icon>
                    <v-list-item-title class="white--text">Products</v-list-item-title>
                    <v-list-item-action><v-icon color="white">mdi-chevron-right</v-icon></v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon color="white">mdi-account-supervisor</v-icon></v-list-item-icon>
                    <v-list-item-title class="white--text">Users</v-list-item-title>
                    <v-list-item-action><v-icon color="white">mdi-chevron-right</v-icon></v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon color="white">mdi-star-outline</v-icon></v-list-item-icon>
                    <v-list-item-title class="white--text">Submission</v-list-item-title>
                    <v-list-item-action><v-icon color="white">mdi-chevron-right</v-icon></v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon color="white">mdi-instagram</v-icon></v-list-item-icon>
                    <v-list-item-title class="white--text">Instagram</v-list-item-title>
                    <v-list-item-action><v-icon color="white">mdi-chevron-right</v-icon></v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon color="white">mdi-bell-outline</v-icon></v-list-item-icon>
                    <v-list-item-title class="white--text">Notification</v-list-item-title>
                    <v-list-item-action><v-icon color="white">mdi-chevron-right</v-icon></v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon color="white">mdi-email</v-icon></v-list-item-icon>
                    <v-list-item-title class="white--text">Mail</v-list-item-title>
                    <v-list-item-action><v-icon color="white">mdi-chevron-right</v-icon></v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon color="white">mdi-lock-outline</v-icon></v-list-item-icon>
                    <v-list-item-title class="white--text">Security</v-list-item-title>
                    <v-list-item-action><v-icon color="white">mdi-chevron-right</v-icon></v-list-item-action>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon><v-icon color="white">mdi-logout</v-icon></v-list-item-icon>
                    <v-list-item-title class="white--text">Logout</v-list-item-title>
                </v-list-item>
            </v-list>
        </div>
    </AppTheme>
</template>


<script>

import AppTheme from './AppTheme.vue'

export default {
    name:'Dashboard',
    components:{
        AppTheme,
    },
    data(){
        return{
            drawerShow:false
        }
    }
}
</script>