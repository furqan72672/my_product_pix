<template>
    <v-app>
        <Dashboard/>
        <v-main>
            <ProductTable/>
        </v-main>
    </v-app>
</template>



<script>

import Dashboard from '../components/Dashboard.vue'
import ProductTable from '../components/ProductTable.vue'

export default {
    name:'Products',
    components:{
        Dashboard,
        ProductTable,
    }
}
</script>