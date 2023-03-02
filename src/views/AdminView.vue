<template>
    <div class="container">
     <div class="row">
        <h1>Users</h1>
     </div>
    </div>

    <div class="row">
        <table class="table">
            <thead>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>User Role</th>
                <th>User profile</th>
            </thead>
            <tbody>
               <tr v-for="user in users"  :key="user.userID">
                <td>{{  user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>{{ user.userRole }}</td>
                <td><img class="img-fluid" :src="user.userProfile" :alt ="user.firstName" ></td>
             </tr> 
            </tbody>
            </table>
            </div>
        
            <div class="container-fluid">
            <div class="row">
                <h1>Products</h1>
            </div>
        </div>
       <div class="row">
        <table class="table">
            <thead>
                <th>prod Name</th>
                <th>prod Description</th>
                <th>prod Price</th>
                <th>prod Quantity</th>
                <th>prod image</th>
            </thead>
            <tbody>
                <tr v-for="product in products"  :key="product.id">
             <td>{{  product.prodName }}</td>
             <td>{{  product.prodDescription }}</td>
             <td>{{  product.price }}</td>
             <td>{{  product.prodQuantity }}</td>
             <td><img :src="product.imgURL" :alt ="product.prodName" ></td>
            </tr> 
            </tbody>
        </table>
        </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';
// import AddUser from '@/components/AddUser.vue'
// import AddProduct from '@/components/AddProduct.vue'
export default {
    setup() {
        const store = useStore();
        store.dispatch("fetchUsers");
        store.dispatch("fetchProducts");
        const users =
        computed( ()=>store.state.users);
        const products =
        computed( ()=> store.state.products);
        return {
            users,
            products
        }
    }

    // data() {
    //     return { 

    //     }
    // },
    // mounted() {
    //     this.fetchUsers()
    // },
    // methods: {
    //     fetchUsers() {
    //         this.$store.dispatch('fetchProducts')
    //     }
    // }
}
</script>
