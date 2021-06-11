<template>
  <div>
    
    <nav class="navbar bg-white navbar-light">
        <router-link class="navbar-brand" :to="{name:'home'}">Home</router-link>
        <router-link class="btn nav-button mr-auto" to="/second">Second</router-link>
    </nav>
    <div class="container mt-5">
        <router-view></router-view>
    </div>
  </div>
</template>
