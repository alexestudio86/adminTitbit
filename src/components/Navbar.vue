<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <span class="navbar-text text-uppercase">Bienvenido al sistema de administración</span>
        </li>
      </ul>
      <div class="d-flex">
        <router-link to='/' class="navbar-brand">
          <img src="../assets/logo-titbit.png" alt="Logo Titbit" width="70" height='auto' />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>