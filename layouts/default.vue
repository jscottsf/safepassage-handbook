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
            <a class="nav-link dropdown-toggle" href="/" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Best Practices</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <router-link class="dropdown-item" :to="{name: 'general'}">General</router-link>
              <router-link class="dropdown-item" :to="{name: 'awareness'}">Awareness</router-link>
              <router-link class="dropdown-item" :to="{name: 'communication'}">Communication</router-link>
              <router-link class="dropdown-item" :to="{name: 'movement'}">Movement</router-link>
              <router-link class="dropdown-item" :to="{name: 'presence'}">Presence</router-link>
              <router-link class="dropdown-item" :to="{name: 'crosswalk'}">Crosswalk</router-link>
              <router-link class="dropdown-item" :to="{name: 'equipment'}">Equipment</router-link>
            </div>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Radio</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <router-link class="dropdown-item" :to="{name: 'radio-instructions'}">Instructions</router-link>
              <router-link class="dropdown-item" :to="{name: 'radio-protocols'}">Protocols</router-link>
              <router-link class="dropdown-item" :to="{name: 'radio-testing'}">Testing</router-link>
            </div>
          </li>
        </ul>

        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Misc</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <router-link class="dropdown-item" :to="{name: 'interactive-bestpracticeguess'}">Best Practice Guess</router-link>
              <router-link class="dropdown-item" :to="{name: 'interactive-bestpracticereview'}">Best Practice Review</router-link>
              <router-link class="dropdown-item" :to="{name: 'interactive-placedirectional'}">Places / Directional</router-link>
              <router-link class="dropdown-item" :to="{name: 'interactive-wordcloud'}">Word Cloud</router-link>
<!--
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" role="button" @click.prevent="setFilterTag('public')"><i class="fa fa-check" :class="[filterTag === 'public' ? '' : 'invisible']" aria-hidden="true"></i> Public</a>
              <a class="dropdown-item" role="button" @click.prevent="setFilterTag('internal')"><i class="fa fa-check" :class="[filterTag === 'internal' ? '' : 'invisible']" aria-hidden="true"></i> Internal</a>
 -->
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <nuxt/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: mapGetters([
    'filterTag'
  ]),

  methods: {
    ...mapMutations({
      setFilterTag: 'setFilterTag'
    })
  }
}
</script>

<style>
.pt-header {
  padding-top: 60px;
}

.vh-100 {
  height: 100vh;
}
</style>
