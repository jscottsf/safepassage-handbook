<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top" style="opacity: .9;">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand" :to="{name: 'index'}">Handbook</router-link>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Best Practices</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <router-link class="dropdown-item" to="general">General</router-link>
              <router-link class="dropdown-item" to="awareness">Awareness</router-link>
              <router-link class="dropdown-item" to="communication">Communication</router-link>
              <router-link class="dropdown-item" to="movement">Movement</router-link>
              <router-link class="dropdown-item" to="presence">Presence</router-link>
              <router-link class="dropdown-item" to="crosswalk">Crosswalk</router-link>
              <router-link class="dropdown-item" to="equipment">Equipment</router-link>
            </div>
          </li>
        </ul>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Radio</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <router-link class="dropdown-item" to="radio-instructions">Instructions</router-link>
              <router-link class="dropdown-item" to="radio-protocols">Protocols</router-link>
              <router-link class="dropdown-item" to="radio-testing">Testing</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <nuxt/>
  </div>
</template>

<style>
.pt-header {
  padding-top: 60px;
}

.vh-100 {
  height: 100vh;
}
</style>
