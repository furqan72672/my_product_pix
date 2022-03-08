<template>
    <div>
        <v-app-bar app color="white">
            <v-app-bar-nav-icon v-on:click="drawerShowFunc" color="black"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-icon color="black">mdi-bell-outline</v-icon>
        </v-app-bar>
        <v-navigation-drawer color="red" app v-model="drawerShow">
            <slot name="drawerItems"></slot>
        </v-navigation-drawer>
        <slot name="drawer"></slot>
    </div>
</template>

<script>

export default {
    name:'AppTheme',
    components:{
    },
    data(){
        return {
            drawerShow:false
        }
    },
    methods: {
        drawerShowFunc(){
            this.drawerShow=!this.drawerShow
        }
    },
}
</script>