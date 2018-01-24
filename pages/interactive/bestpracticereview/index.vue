<template>
  <section class="container-fluid pt-header">
    <div class="row">
      <div class="col-12">
        <h1 class="display-1">Best Practices</h1>
      </div>
    </div>

    <div class="row py-1" style="cursor: pointer;" v-for="area in bestPractices.areas" @click="$router.push({name: 'interactive-bestpracticereview-areaSlug', params: {areaSlug: area.slug}})">
      <div class="col-6">
        <div class="d-flex flex-row justify-content-start align-items-center px-1 py-1" :style="{backgroundColor: area.color_dark}">
          <img class="px-2 py-2 mr-2" style="width: 80px; height: 80px; opacity: .5;" :src="`images/${area.image}`" />
          <span class="display-4 text-white">{{ area.heading.en }}</span>
        </div>
      </div>

      <div class="col-6">
        <div class="d-flex flex-row justify-content-start align-items-center px-1 py-1" :style="{backgroundColor: area.color_dark}">
          <img class="px-2 py-2 mr-2" style="width: 80px; height: 80px; opacity: .5;" :src="`images/${area.image}`" />
          <span class="display-4 text-white">{{ area.heading.es }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  mounted: function () {
    document.addEventListener('keydown', this.onKeyDown)
  },

  beforeDestroy: function () {
    document.removeEventListener('keydown', this.onKeyDown)
  },

  computed: mapGetters([
    'bestPractices'
  ]),

  methods: {
    onKeyDown (event) {
      console.log(event)
      if ((event.key === 'ArrowRight') && !event.altKey && !event.ctrlKey && !event.shiftKey) this.next()
      else if ((event.key === 'ArrowLeft') && !event.altKey && !event.ctrlKey && !event.shiftKey) this.previous()
    },

    previous () {
      const {bestPractices} = this

      this.$router.push({
        name: 'interactive-bestpracticereview-areaSlug-sectionSlug-itemId',
        params: {
          areaSlug: bestPractices.areas.slice(-1)[0].slug,
          sectionSlug: bestPractices.areas.slice(-1)[0].sections.slice(-1)[0].slug,
          itemId: bestPractices.areas.slice(-1)[0].sections.slice(-1)[0].items.length
        }
      })
    },

    next () {
      const {bestPractices} = this

      this.$router.push({
        name: 'interactive-bestpracticereview-areaSlug-sectionSlug-itemId',
        params: {
          areaSlug: bestPractices.areas[0].slug,
          sectionSlug: bestPractices.areas[0].sections[0].slug,
          itemId: 1
        }
      })
    }
  }
}
</script>
