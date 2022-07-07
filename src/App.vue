<template>
  <header class='navbar'>
    <strong>Vue Composition API</strong>
    <ul class='navbar-menu'>
      <li>
        <router-link to='/'>Main</router-link>
      </li>
      <li>
        <router-link to='/reusable'>Reuse</router-link>
      </li>
      <li>
        <router-link to='/vuex'>Vuex</router-link>
      </li>
    </ul>
  </header>
  <div class='container with-nav'>
    <router-view></router-view>
  </div>
</template>

