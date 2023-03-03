<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Users</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Name</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Category</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Price</label>
            <input type="email" class="form-control" id="inputEmail4">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>


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
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
               <tr v-for="user in users"  :key="user.userID">
                <td>{{  user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>{{ user.userRole }}</td>
                <td><img class="img-fluid" :src="user.userProfile" :alt ="user.firstName" ></td>
                <td><button class="btn btn-primary">Edit</button></td>
                <td><button class="btn btn-primary">Delete</button></td>
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
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <tr v-for="product in products"  :key="product.id">
             <td>{{  product.prodName }}</td>
             <td>{{  product.prodDescription }}</td>
             <td>{{  product.price }}</td>
             <td>{{  product.prodQuantity }}</td>
             <td><img :src="product.imgURL" :alt ="product.prodName" ></td>
             <td><button class="btn btn-primary">Edit</button></td>
             <td><button class="btn btn-primary">Delete</button></td>
            </tr> 
            </tbody>
        </table>
        </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';

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
}
</script>
<style scoped>

.table img{
    height: 130px;
}

</style>