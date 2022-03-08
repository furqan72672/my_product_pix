<template>
    <v-app>
        <Dashboard/>
        <v-main v-on:updatePressed="showUpdate">
            <v-card app width="50%" class="d-flex mx-auto my-5">
                <v-btn icon><v-icon>mdi-arrow-left</v-icon></v-btn>
                <v-col class="my-5">
                <v-card-title class="font-weight-bold">Add Product</v-card-title>
                <v-form class="d-flex flex-column mx-5">
                    <span class="font-weight-bold black--text">Title</span>
                    <v-text-field placeholder="Product Title"></v-text-field>
                    <span class="font-weight-bold black--text">Sku</span>
                    <v-text-field placeholder="Product Sku"></v-text-field>
                    <span class="font-weight-bold black--text">Description</span>
                    <v-textarea placeholder="Product Description"></v-textarea>
                    <span class="font-weight-bold black--text">Size</span>
                    <v-text-field placeholder="Product Size"></v-text-field>
                    <span class="font-weight-bold black--text">Category</span>
                    <v-text-field placeholder="Product Category"></v-text-field>
                    <span class="font-weight-bold black--text">Media</span>
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn color="red" class="white--text font-weight-thin">Submit</v-btn>
                    </v-row>
                </v-form>
                </v-col>
            </v-card>
        </v-main>
    </v-app>
</template>


<script>

import Dashboard from '../components/Dashboard.vue'

export default {
    name:'ManageProduct',
    components:{
        Dashboard,
    },
    props:{
        item,
    },
    data(){
        return{
            update:false,
        }
    },
    methods: {
        showUpdate(){
            this.update=!this.update
        }
        
    },
}
</script>