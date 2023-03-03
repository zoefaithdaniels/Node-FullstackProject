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
    showSpinner(state) {
      return state.showSpinner
    }
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
    setMessage(state, value){
      state.message = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
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
      const {results, err} = await res.data;
      if(results) {
       context.commit('setProducts', results)
       context.commit('setSpinner', false)
      }else{
        context.commit('setMessage', err)
        context.commit('setSpinner', true)
      }
    }
  },
   
  }
)
