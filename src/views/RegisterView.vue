<template>
    <div class="container">
  <div class="form">
    <form action="https://formspree.io/f/xoqzwqgn" method="POST" class="row g-3">
    <div class="card">
    <p id="heading">Register</p>
    <div class="place">
      <i class="fa-solid fa-user-plus"></i><input type="text" class="placeholder" placeholder="Username" name="Username" required>
    </div>
    <div class="place">
      <i class="fa-solid fa-envelope"></i><input type="email" class="placeholder" placeholder="Email" name="Email" required>
    </div>
    <div class="place">
      <i class="fa-solid fa-unlock"></i><input type="password" class="placeholder" placeholder="Password" name="Password" required>
    </div>
    <div class="btn">
        <label><input type="checkbox"/>I agree to all terms & conditions.</label>
    <button class="button1">Register</button>
    </div>
  </div>
</form>
  </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.btn label input{
    margin-right: 3px;
    border: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 2em;
  padding-right: 2em;
 padding-bottom: 0.4em; 
  background-color: white;
  border-radius: 20px;
  width:25rem;
  padding-top: 10px;
  margin-top: 10px;
}

#heading {
  text-align: center;
  margin: 2em;
  color: rgb(0, 255, 200);
  font-size: 1.2em;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.card {
  display: flex; 
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  

}

.input-icon {
  height: 1.3em;
  width: 1.3em;
  fill: rgb(0, 255, 200);
}

 .place {
  background: none;
  border: none;
  outline: none;
  color: rgb(0, 255, 200);
} 

.card .btn {
   display: flex; 
   justify-content: center; 
   flex-direction: row; 
   margin-top: 2.5em; 
}

.button1 {
  padding: 0.5em;
  
  border-radius: 5px;
  margin-right: 0.5em;
  border: none;
  outline: none;
  transition: .4s ease-in-out;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  color: rgb(0, 0, 0);
}

.button1:hover {
  background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
  color: rgb(0, 255, 200);
}

.form {
  border-radius: 0;
  transition: all .2s;
}

.form:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

.form:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}

.placeholder {
    background-color: white;
    opacity: 1;
    color: black;
    border-radius: 2em;
   }


</style>