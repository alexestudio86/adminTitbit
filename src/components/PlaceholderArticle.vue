<template>
  <div>
    <article class="w3-white mb-3 px-3 py-1" >
      <div class="w3-row" style='height:150px'>
          <div class="w3-col m2 w3-center">
              <!-- Image -->
              <div class="loader" style="height:70px"></div>
              <!-- Estado -->
              <div class="loader"></div>
          </div>
          <div class="w3-col m10">
            <div class="w3-row">
              <div class="w3-col m9">
                <!-- Title -->
                <div class="loader"></div>
                <!-- Details -->
                <div class="loader" style="height:80px"></div>
                <!-- Comments -->
                <div class="loader" style="height:40px"></div>
              </div>
              <div class="w3-col m3">
                <div class="w3-right">
                  <div class="loader" ></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {

  name: 'PlaceholderArticle'

}
</script>

<style scoped>

.loader {
  border: 8px solid #ffffff;
  border-radius: 50%;
  border-top: 8px solid #9e9e9e;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>