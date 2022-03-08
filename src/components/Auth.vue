<template>
    <v-row justify="center">
        <v-card app class="d-flex flex-row">
            <div style="width:50%;">
                <v-img src="../assets/authCard.png" />
            </div>
            <slot name="form">Auth Form Here</slot>
        </v-card>
    </v-row>
</template>



<script>
    export default{
        name:'Auth',
    }
</script>