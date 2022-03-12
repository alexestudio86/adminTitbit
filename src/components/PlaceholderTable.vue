<template>
  <ul class="w3-ul w3-light-gray w3-hoverable">
    <li class="py-2">
      <div class="loader"></div>
    </li>
    <li class="py-2">
      <div class="loader"></div>
    </li>
    <li class="py-2">
      <div class="loader"></div>
    </li>
    <li class="py-2">
      <div class="loader"></div>
    </li>
    <li class="py-2">
      <div class="loader"></div>
    </li>
    <li class="py-2">
      <div class="loader"></div>
    </li>
    <li class="py-2">
      <div class="loader"></div>
    </li>
    <li class="py-2">
      <div class="loader"></div>
    </li>
    <li class="py-2">
      <div class="loader"></div>
    </li>
    <li class="py-2">
      <div class="loader"></div>
    </li>
  </ul>
</template>

<script>
export default {

  name: 'PlaceholderArticle'

}
</script>

<style scoped>

.loader {
  border: 4px solid #ffffff;
  border-radius: 50%;
  border-top: 4px solid #9e9e9e;
  width: 25px;
  height: 25px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>