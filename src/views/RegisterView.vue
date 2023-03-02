<template>
  <div class="container">
      <div class="title">Registration</div>
      <form action="https://formspree.io/f/xoqzwqgn" method="POST" class="row g-3">
          <div class="details-user">
              <div class="input-box">
                  <span class="details">Full Name</span>
                  <input type="text" placeholder="Enter Name"  name="full name" required>
              </div>
              <div class="input-box">
                  <span class="details">Username</span>
                  <input type="text" placeholder="Username"  name="username" required>
              </div>
              <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" placeholder="Enter Email"  name="email" required>
              </div>
              <div class="input-box">
                  <span class="details">Phone Number</span>
                  <input type="text" placeholder="Enter Phone Number" name="phone number" required>
              </div>
              <div class="input-box">
                  <span class="details">Password</span>
                  <input type="text" placeholder="Enter Password"  name="password" required>
              </div>
              <div class="input-box">
                  <span class="details">Confirm Password</span>
                  <input type="text" placeholder="Confirm Password"  name="confirm password" required>
              </div>
          </div>
      </form>
      <div class="detail-gender">
          <input type="radio" name="gender" id="dot-1">
          <input type="radio" name="gender" id="dot-2">
          <input type="radio" name="gender" id="dot-3">
          <span class="gender-title">Gender</span>
          <div class="category">
              <label for="dot-1">
                  <span class="dot one"></span>
                  <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                  <span class="dot two"></span>
                  <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                  <span class="dot three"></span>
                  <span class="gender">Prefer not to say</span>
              </label>
          </div>
      </div>
       <div class="button">
          <input type="Submit" value="Register">
       </div>

</div>
</template>

<script>
// import {computed} from '@vue/runtime-core';
// import {useStore} from 'vuex';
  export default {
      
  }
</script>

<style scoped>

body{
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.title{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 50px;
  color: white;
}
.container{
  max-width: 700px;
  width: 100%;
  background: black;
  padding: 25px 30px;
  margin-top: 50px;
  border-radius: 3em;
}
.container .title{
  font-size: 25px;
  font-weight: 500;
  position: relative;
}
.container form .details-user{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
.details{
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
}
form .details-user .input-box{
  width: calc(100% / 2 - 20px);
  margin-bottom: 5px;
  
}
.details-user .input-box .details{
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
}
.details-user .input-box input{
height: 45px;  
width: 100%;
outline: none;
border-radius: 2em;
padding-left: 15px;
font-size: 16px;
border-bottom-width: 2px;
transition: all 0.3s ease;
}
.details-user .input-box input:focus,
.details-user .input-box input:valid{
border-color: aliceblue;
}
.gender-title{
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
}

form .detail-gender .gender-title{
font-size: 20px;
font-weight: 500;
}
.detail-gender .category{
  display: flex;
  width: 80%;
  margin: 15px 0;
  margin-left: 55px;
  justify-content: space-between; 
}
.detail-gender .category label{
  display: flex;
  align-items: center;
}
.category{
  color: white;

}
.detail-gender .category .dot{
 height: 18px; 
 width: 18px;
 background: #d9d9d9;
 border-radius: 50%;
 margin-right: 10px;
 border: 5px solid transparent;
 transition: all 0.3s ease;
}
#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three{
border-color: #003cff;
} 
form input[type="radio"]{
  display: none;
}

 form.button input{
  height: 100%;
  width: 100%;
  outline:none;
  background-image: (163deg, #00ff75 0%, #3700ff 100%);
  border: none;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 2em;
  background-color: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
}
 .button input{
  width: 200px;
  border-radius: 10px;
  background: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
}
@media (max-width: 320px) {
  .container{
      max-width: 100%;
  }
  form .details-user .input-box{
      margin-bottom: 15px;
      width: 100%;
  }
  form .detail-gender .category{
      width: 100%;
  }
  .container form .detail-user{
      max-height: 300px;
      overflow-y: scroll;
  }
}
.container {
  border-radius: 0;
  transition: all .2s;
}

.container:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

.container:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}


</style>