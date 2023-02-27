<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to ="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to ="/Products">Products</router-link>
        </li>
        <li class="nav-item ">
          <router-link to ="/Admin">Admin</router-link>   
        </li>
        <li class="nav-item ">
          <router-link to ="/Login">Login</router-link>   
        </li>
        <li class="nav-item ">
          <router-link to ="/Register">Register</router-link>   
        </li>
        <li class="nav-item ">
          <router-link to ="/Contact">Contact</router-link>   
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
    
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
  </style>