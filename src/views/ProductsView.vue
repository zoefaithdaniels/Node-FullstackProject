<template>
    <div>
        <div v-if="spinner">
             <SpinnerComponent/>        
        </div>
    <div v-else class="container px-5">
        <div class="row" style="height 50%;">
            <h2>Products</h2>
            <div class="container-fluid">
                <div class="row gy-3 gap-5 mx-3 d-sm-flex justify-content-center mt-5 text-white;">
                    <div class="card col-3" v-for="(product, index ) in products" :key="index">
                    <img :src="product.imgURL" class="mx-auto d-block" style="width: 15rem; height: 15rem; padding-top: 20px;"/>
                    <div class="card-body text-white" style="width:auto">
                        <h5 class="card-title">{{ product.prodName }}</h5>
                        <h5 class="card-title">{{ product.category }}</h5>
                        <h5 class="card-title">{{ product.price }}</h5>
                        <p class="card-text">{{ product.prodDescription }}</p>
                        <button class="btn btn-primary">View product</button>
                        <a href="./SingleProductView.vue"></a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex'; 
import SpinnerComponent from "../components/SpinnerComponent.vue"
export default {
    components: {
        SpinnerComponent
    },
    setup(){
        const store= useStore();
        store.dispatch("fetchProducts");
        const products = computed (()=> store.state.products);
        const spinner = computed (()=> store.state.showSpinner);
    return {
        products,
        spinner
    };
    }
}
</script>
<style scoped>
.card{
    background-color: black;
}

</style>