<template>
  <section class="container-fluid">
    <div class="row pt-header pb-2" style="cursor: pointer;" :style="{backgroundColor: area.data.color_dark}" @click="$router.push({name: 'interactive-bestpracticereview'})">
      <div class="col-6 d-flex flex-row justify-content-start align-items-center" style="overflow: hidden;">
        <span class="display-3 text-white">{{ area.data.heading.en }}</span>
        <img class="px-2 py-2 ml-auto" style="width: 80px; height: 80px; opacity: .5;" :src="`images/${area.data.image}`" />
      </div>

      <div class="col-6 d-flex flex-row justify-content-start align-items-center" style="overflow: hidden;">
        <span class="display-3 text-white">{{ area.data.heading.es }}</span>
        <img class="px-2 py-2 ml-auto" style="width: 80px; height: 80px; opacity: .5;" :src="`images/${area.data.image}`" />
      </div>
    </div>

    <div class="row" style="cursor: pointer;" v-for="section in area.data.sections" @click="$router.push({name: 'interactive-bestpracticereview-areaSlug-sectionSlug', params: {areaSlug: area.data.slug, sectionSlug: section.slug}})">
      <div class="col-6 py-2" style="overflow: hidden;" :style="{borderBottom: `2px solid ${area.data.color_dark}`}">
        <h1 class="pt-1">{{ section.heading.en }}</h1>
      </div>

      <div class="col-6 py-2" style="overflow: hidden;" :style="{borderBottom: `2px solid ${area.data.color_dark}`}">
        <h1 class="pt-1">{{ section.heading.es }}</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-12 pt-4 text-center">
        <button type="button" class="btn btn-secondary btn-lg mx-1" @click="previous"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
        <button type="button" class="btn btn-secondary btn-lg mx-1" @click="next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
      </div>
    </div>
  </section>
</template>

<script>
import bestPractices from '../../../../data/bestPractices.json'
// import {mapState} from 'vuex'

export default {
  data () {
    return {bestPractices}
  },

  mounted: function () {
    document.addEventListener('keydown', this.onKeyDown)
  },

  beforeDestroy: function () {
    document.removeEventListener('keydown', this.onKeyDown)
  },

  computed: {
    // ...mapState([
    //   'bestPractices'
    // ]),

    area () {
      const areas = this.bestPractices.areas
      const index = areas.findIndex(area => {
        return area.slug === this.$route.params.areaSlug
      })

      return {
        data: areas[index],
        index
      }
    }
  },

  methods: {
    onKeyDown (event) {
      console.log(event)
      if ((event.key === 'ArrowRight') && !event.altKey && !event.ctrlKey && !event.shiftKey) this.next()
      else if ((event.key === 'ArrowLeft') && !event.altKey && !event.ctrlKey && !event.shiftKey) this.previous()
    },

    previous () {
      const {bestPractices, area} = this

      const newAreaIndex = area.index - 1

      if (newAreaIndex > -1) {
        this.$router.push({
          name: 'interactive-bestpracticereview-areaSlug',
          params: {
            areaSlug: bestPractices.areas[newAreaIndex].slug
          }
        })
      } else {
        this.$router.push({
          name: 'interactive-bestpracticereview'
        })
      }
    },

    next () {
      const {bestPractices, area} = this

      const newAreaIndex = area.index + 1

      if (newAreaIndex < bestPractices.areas.length) {
        this.$router.push({
          name: 'interactive-bestpracticereview-areaSlug',
          params: {
            areaSlug: bestPractices.areas[newAreaIndex].slug
          }
        })
      } else {
        this.$router.push({
          name: 'interactive-bestpracticereview'
        })
      }
    }
  }
}
</script>
