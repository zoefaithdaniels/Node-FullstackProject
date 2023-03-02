<template>
 <div onclick="ldld.toggle()">
  Toggle Loader
</div>
<img class="ldld" src="your-loader-url">   
</template>

<script>
  var ldld = new ldLoader({root: '.ldld'});
</script>
  
<style scoped>

</style>