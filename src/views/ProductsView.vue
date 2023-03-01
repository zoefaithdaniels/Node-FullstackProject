<template>
    <div class="container">
        <div class="title">Registration</div>
        <form action="#">
            <div class="user-details">
                <div class="input-box">
                    <span class="details">Full Name</span>
                    <input type="text" placeholder="Enter Name" required>
                </div>
                <div class="input-box">
                    <span class="details">Username</span>
                    <input type="text" placeholder="Username" required>
                </div>
                <div class="input-box">
                    <span class="details">Email</span>
                    <input type="text" placeholder="Enter Email" required>
                </div>
                <div class="input-box">
                    <span class="details">Phone Number</span>
                    <input type="text" placeholder="Enter Phone Number" required>
                </div>
                <div class="input-box">
                    <span class="details">Password</span>
                    <input type="text" placeholder="Enter Password" required>
                </div>
                <div class="input-box">
                    <span class="details">Confirm Password</span>
                    <input type="text" placeholder="Confirm Password" required>
                </div>
            </div>
        </form>
        <div class="gender detail">
            <span class="gender title">Gender</span>
            <div class="category">
                <label for="">
                    <span class="dot one"></span>
                    <span class="gender">Male</span>
                </label>
                <label for="">
                    <span class="dot one"></span>
                    <span class="gender">Female</span>
                </label>
                <label for="">
                    <span class="dot one"></span>
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
    export default {
        
    }
</script>

<style scoped>

</style>