<template>

    <section class="contact">
      <h1 class="title">Contact Me</h1>



      <form action="https://formspree.io/f/xoqzwqgn" method="POST" class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" name="name" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" name="name" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="name" required>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" name="name" required>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">Province</label>
    <select class="form-select" id="validationDefault04" name="name" required>
      <option selected disabled value="">Choose One</option>
      <option>Western Cape</option>
      <option>Eastern Cape</option>
      <option>Free State</option>
      <option>KwaZulu-Natal</option>
      <option>Limpopo</option>
      <option>Northern Cape</option>
      <option>North West</option>
      <option>Gauteng</option>
      <option>Mpumalanga</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" name="number" required>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="text" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
</section>

</template>



<style  scoped> 

form input{
display: flex;
flex-direction: row;
}
    .contact{
     max-width: 800px;
      margin: 50px auto;
      position: relative;
      box-shadow: 0 10px 30px 0px rgba(247, 3, 68, 0.1);
      padding: 30px;
      border: solid;
      border-color: black; 
      display: flex;
      flex-direction:column;
      gap: 10px;
      background-color: #171717;
 }

 #heading {
  text-align: center;
  margin: 2rem;
  color: rgb(0, 225, 200);
  font-size: 1.2rem;

 }
    .btn-primary{
      background: rgb(149, 32, 149);
      border: solid;
      border-color: black;
    } 
    </style>