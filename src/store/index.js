import { createStore } from 'vuex'
import axios from 'axios';
const sneakerURL = 'https://sneaker-hub-usr6.onrender.com/';
// const sneakerURL = 'http://localhost:4000';



export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values){
     state.users = values
    },
    setUser(state, value){
      state.user = value
    },
    setProducts(state, values){
      state.products = values
    },
    setProduct(state, value){
      state.product= value
    },
    setSpinner(state, value){
      state.spinner = value
    },
    setMessage(state, value){
      state.message = value
    }
      

  },
  actions: {
    async fetchUsers(context){
      const res = await axios.get(`${sneakerURL}users`);
      const {results, err} = await res.data;
      if(results) {
       context.commit('setUsers', results)
      }else{
        context.commit('setMessage', err)
      }

    },
    async fetchProducts(context){
      const res = await axios.get(`${sneakerURL}products`);
      const {data, err} = await res.data;
      if(data) {
       context.commit('setProducts', data)
      }else{
        context.commit('setMessage', err)
      }
    }
  },
   
  }
)
