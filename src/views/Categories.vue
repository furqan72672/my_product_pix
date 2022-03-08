<template>
    <v-app>
        <Dashboard/>
        <v-main>
            <CategoriesTable/>
        </v-main>
    </v-app>
</template>


<script>
import Dashboard from '../components/Dashboard.vue'
import CategoriesTable from '../components/CategoriesTable.vue'

export default {
    name:'Categories.vue',
    components:{
        Dashboard,
        CategoriesTable
    }
}
</script>