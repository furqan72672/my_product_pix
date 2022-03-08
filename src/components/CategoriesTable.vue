<template>
    <div class="d-flex justify-center">
        <v-data-table
        :headers="headers"
        :items="categories"
        items-per-page="5"
        class="elevation-1"
        app
        >
        <template v-slot:top>
            <v-row class="d-flex my-auto mx-5 justify-center">
                <v-col class="justify-start">
                    <span class="font-weight-bold" style="font-size:150%;text-align: center;">Categories</span>
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
            <v-btn icon v-on:click="editPressed(item)" to="/manageproduct"><v-icon small color="green">mdi-pencil</v-icon></v-btn>
            <v-btn icon><v-icon small color="red">mdi-delete</v-icon></v-btn>
        </template>
        </v-data-table>
    </div>
</template>


<script>
export default {
    name:'CategoriesTable',
    data(){
        return {
            headers:[
                {text:'SR#',value:'serial'},
                {text:'Title',value:'title'},
                {text:'Status',value:'status'},
                {text:'Actions',value:'action'},
            ],
            categories:[
                {
                    serial:1,
                    title:'Pants',
                    status:'Active',
                    actions:''
                },
                {
                    serial:2,
                    title:'Shirts',
                    status:'Suspended',
                    actions:''
                },
                {
                    serial:3,
                    title:'Shoes',
                    status:'Active',
                    actions:''
                },
                {
                    serial:4,
                    title:'Hats',
                    status:'Active',
                    actions:''
                },
            ]
        }
    }
}
</script>