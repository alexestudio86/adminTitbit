<template>
  <table class="w3-table-all w3-hoverable">
    <thead>
      <tr class="w3-light-grey">
        <th>#</th>
        <th class="">Nombre</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>
          <div class="loader"></div>
        </td>
      </tr>
      <tr>
        <th>2</th>
        <td>
          <div class="loader"></div>
        </td>
      </tr>
      <tr>
        <th>3</th>
        <td>
          <div class="loader"></div>
        </td>
      </tr>
      <tr>
        <th>4</th>
        <td>
          <div class="loader"></div>
        </td>
      </tr>
      <tr>
        <th>5</th>
        <td>
          <div class="loader"></div>
        </td>
      </tr>
      <tr>
        <th>6</th>
        <td>
          <div class="loader"></div>
        </td>
      </tr>
      <tr>
        <th>7</th>
        <td>
          <div class="loader"></div>
        </td>
      </tr>
      <tr>
        <th>8</th>
        <td>
          <div class="loader"></div>
        </td>
      </tr>
      <tr>
        <th>9</th>
        <td>
          <div class="loader"></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {

  name: 'PlaceholderTable'

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