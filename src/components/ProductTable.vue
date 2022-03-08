<template>
    <div class="d-flex justify-center">
        
        <v-data-table
        :headers="headers"
        :items="products"
        :items-per-page="5"
        class="elevation-1"
        app
        >
        <template v-slot:top>
            <v-row class="d-flex my-auto mx-5 justify-center">
                <v-col class="justify-start">
                    <span class="font-weight-bold" style="font-size:150%;text-align: center;">Products</span>
                </v-col>
                <v-spacer></v-spacer>
                <v-btn color="red" class="white--text font-weight-thin" style="align-self:center;" elevation="4" to="/manageproduct">Add New</v-btn>
                <v-btn style="align-self:center;" color="black" icon><v-icon>mdi-reload</v-icon></v-btn>
            </v-row>
            <v-row>
                <v-spacer></v-spacer>
                <v-col>
                    <v-text-field outlined filled dense prepend-inner-icon="mdi-magnify" placeholder="Search"></v-text-field>
                </v-col>
            </v-row>
        </template>
        <template v-slot:item.actions={item}>
            <v-btn icon v-on:click="editPressed(item)" to="/manageproduct" v-bind="item"><v-icon small color="green">mdi-pencil</v-icon></v-btn>
            <v-btn icon><v-icon small color="red">mdi-delete</v-icon></v-btn>
        </template>
        <template v-slot:item.image>
            <v-avatar><v-img src="../assets/logo.png"/></v-avatar>
        </template>
        </v-data-table>
    </div>
</template>


<script>


export default {
    name:'ProductTable',
    data(){
        return {
            headers:[
                {
                    text:'SR#',
                    align:'start',
                    sortable: false,
                    value:'serial'
                },
                {text:'Images',value:'image'},
                {text:'Title', value:'title'},
                {text:'Sku', value:'sku'},
                {text:'Size', value:'size'},
                {text:'Description', value:'description'},
                {text:'Category', value:'category'},
                {text:'Actions', value:'actions'},

            ],
            products:[
                {
                    serial:1,
                    image:'put Image Here',
                    title:'Random Product',
                    sku:'12345678',
                    size:28,
                    description:'qwertyuiop asdfghjkl',
                    category:'Pants',
                    actions:'Icons here'
                },
                {
                    serial:1,
                    image:'put Image Here',
                    title:'Random Product',
                    sku:'12345678',
                    size:28,
                    description:'qwertyuiop asdfghjkl',
                    category:'Pants',
                    actions:'Icons here'
                },
                {
                    serial:1,
                    image:'put Image Here',
                    title:'Random Product',
                    sku:'12345678',
                    size:28,
                    description:'qwertyuiop asdfghjkl',
                    category:'Pants',
                    actions:'Icons here'
                },
                {
                    serial:1,
                    image:'put Image Here',
                    title:'Random Product',
                    sku:'12345678',
                    size:28,
                    description:'qwertyuiop asdfghjkl',
                    category:'Pants',
                    actions:'Icons here'
                },
            ]
        }
    },
    methods: {
        editPressed(item){
            console.log(item)
            this.$emit('updatePressed',this.item)
        }
    },
    components:{
    }
}
</script>



<style scoped>
.abc{
    
}
</style>