<template>
  <div>
    <article class="w3-white mb-3 px-3 py-1" >
      <div class="w3-row">
          <div class="w3-col m2 w3-center">
              <!-- Image -->
              <div class="load-wraper" style="height:70px">
                <div class="loader"></div>
              </div>
              <!-- Estado -->
              <div class="load-wraper my-1" style="height:10px">
                <div class="loader"></div>
              </div>
          </div>
          <div class="w3-col m10">
            <div class="w3-row">
              <div class="w3-col m9 px-2">
                <!-- Title -->
                <div class="load-wraper" style="height:20px">
                  <div class="loader"></div>
                </div>
                <!-- Details -->
                <div class="load-wraper my-1" style="height:60px">
                  <div class="loader" style="height:80px"></div>
                </div>
                <!-- Comments -->
                <div class="load-wraper my-1" style="height:20px">
                  <div class="loader" style="height:40px"></div>
                </div>
              </div>
              <div class="w3-col m3">
                <div class="w3-row">
                  <div class="w3-half pl-3">
                    <!-- Delete button -->
                    <div class="load-wraper" style="height:50px">
                      <div class="loader" ></div>
                    </div>
                  </div>
                  <div class="w3-half pl-3">
                    <!-- edit button -->
                    <div class="load-wraper" style="height:50px">
                      <div class="loader" ></div>
                    </div>                    
                  </div>
                  <div class="w3-col s12 pl-4 my-1">
                    <!-- invoice button -->
                    <div class="load-wraper" style="height:20px">
                      <div class="loader" ></div>
                    </div>                    
                  </div>
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

.load-wraper{
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(226, 226, 226);
  z-index: 4;
  overflow: hidden;
  border-radius: 5px;
}
.loader {
  position: absolute;
  left: -45%;
  height: 100%;
  width: 45%;
  background-image: linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -moz-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -webkit-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  -webkit-animation: spin 2s linear infinite;
  animation: loading 1s infinite;
  z-index: 5;
}
@keyframes loading {
  0% {
    left: -45%;
  }
  100% {
    left: 100%;
  }
}

</style>