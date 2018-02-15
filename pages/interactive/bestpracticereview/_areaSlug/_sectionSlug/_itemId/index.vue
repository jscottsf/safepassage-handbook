<template>
  <section class="container-fluid">
    <div class="row pt-header pb-2" style="cursor: pointer;" :style="{backgroundColor: area.data.color_dark}" @click="$router.push({name: 'interactive-bestpracticereview-areaSlug', params: {areaSlug: area.data.slug}})">
      <div class="col-6 d-flex flex-row justify-content-start align-items-center" style="overflow: hidden;">
        <span class="display-3 text-white">{{ area.data.heading.en }}</span>
        <img class="px-2 py-2 ml-auto" style="width: 80px; height: 80px; opacity: .5;" :src="`images/${area.data.image}`" />
      </div>

      <div class="col-6 d-flex flex-row justify-content-start align-items-center" style="overflow: hidden;">
        <span class="display-3 text-white">{{ area.data.heading.es }}</span>
        <img class="px-2 py-2 ml-auto" style="width: 80px; height: 80px; opacity: .5;" :src="`images/${area.data.image}`" />
      </div>
    </div>

    <div class="row" style="cursor: pointer;" @click="$router.push({name: 'interactive-bestpracticereview-areaSlug-sectionSlug', params: {areaSlug: area.data.slug, sectionSlug: section.data.slug}})">
      <div class="col-6 py-2" style="overflow: hidden;" :style="{borderBottom: `2px solid ${area.data.color_dark}`}">
        <h1 class="pt-1">{{ section.data.heading.en }}</h1>
      </div>

      <div class="col-6 py-2" style="overflow: hidden;" :style="{borderBottom: `2px solid ${area.data.color_dark}`}">
        <h1 class="pt-1">{{ section.data.heading.es }}</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-6 py-4" style="overflow: hidden;">
        <span class="display-4">{{ item.data.left.en }}</span>
      </div>

      <div class="col-6 py-4" style="overflow: hidden;">
        <span class="display-4">{{ item.data.left.es }}</span>
      </div>
    </div>

    <div class="row" v-if="item.data.right" :style="{backgroundColor: area.data.color_light}">
      <div class="col-6 py-4" style="overflow: hidden;">
        <h1 class="text-dark" style="opacity: .9;">{{ item.data.right.en }}</h1>
      </div>

      <div class="col-6 py-4" style="overflow: hidden;">
        <h1 class="text-dark" style="opacity: .9;">{{ item.data.right.es }}</h1>
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
import {mapGetters} from 'vuex'

export default {
  mounted: function () {
    document.addEventListener('keydown', this.onKeyDown)
  },

  beforeDestroy: function () {
    document.removeEventListener('keydown', this.onKeyDown)
  },

  computed: {
    ...mapGetters([
      'bestPractices',
      'filterTag'
    ]),

    area () {
      const {bestPractices} = this
      const areas = bestPractices.areas
      const index = areas.findIndex(area => {
        return area.slug === this.$route.params.areaSlug
      })

      return {
        data: areas[index],
        index
      }
    },

    section () {
      const sections = this.area.data.sections
      const index = sections.findIndex(section => {
        return section.slug === this.$route.params.sectionSlug
      })

      return {
        data: sections[index],
        index
      }
    },

    item () {
      const index = this.$route.params.itemId - 1

      return {
        data: this.section.data.items[index],
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
      const {bestPractices, area, section, item} = this

      const newAreaIndex = area.index - 1
      const newSectionIndex = section.index - 1
      const newItemIndex = item.index - 1

      if (newItemIndex > -1) {
        this.$router.push({
          name: 'interactive-bestpracticereview-areaSlug-sectionSlug-itemId',
          params: {
            areaSlug: area.data.slug,
            sectionSlug: section.data.slug,
            itemId: newItemIndex + 1
          }
        })
      } else if (newSectionIndex > -1) {
        this.$router.push({
          name: 'interactive-bestpracticereview-areaSlug-sectionSlug-itemId',
          params: {
            areaSlug: area.data.slug,
            sectionSlug: area.data.sections[newSectionIndex].slug,
            itemId: area.data.sections[newSectionIndex].items.length
          }
        })
      } else if (newAreaIndex > -1) {
        this.$router.push({
          name: 'interactive-bestpracticereview-areaSlug-sectionSlug-itemId',
          params: {
            areaSlug: bestPractices.areas[newAreaIndex].slug,
            sectionSlug: bestPractices.areas[newAreaIndex].sections.slice(-1)[0].slug,
            itemId: bestPractices.areas[newAreaIndex].sections.slice(-1)[0].items.length
          }
        })
      } else {
        this.$router.push({
          name: 'interactive-bestpracticereview'
        })
      }
    },

    next () {
      const {bestPractices, area, section, item} = this

      const newAreaIndex = area.index + 1
      const newSectionIndex = section.index + 1
      const newItemIndex = item.index + 1

      if (newItemIndex < section.data.items.length) {
        this.$router.push({
          name: 'interactive-bestpracticereview-areaSlug-sectionSlug-itemId',
          params: {
            areaSlug: area.data.slug,
            sectionSlug: section.data.slug,
            itemId: newItemIndex + 1
          }
        })
      } else if (newSectionIndex < area.data.sections.length) {
        this.$router.push({
          name: 'interactive-bestpracticereview-areaSlug-sectionSlug-itemId',
          params: {
            areaSlug: area.data.slug,
            sectionSlug: area.data.sections[newSectionIndex].slug,
            itemId: 1
          }
        })
      } else if (newAreaIndex < bestPractices.areas.length) {
        this.$router.push({
          name: 'interactive-bestpracticereview-areaSlug-sectionSlug-itemId',
          params: {
            areaSlug: bestPractices.areas[newAreaIndex].slug,
            sectionSlug: bestPractices.areas[newAreaIndex].sections[0].slug,
            itemId: 1
          }
        })
      } else {
        this.$router.push({
          name: 'interactive-bestpracticereview'
        })
      }
    }
  },

  watch: {
    filterTag () {
      this.$router.push({
        name: 'interactive-bestpracticereview'
      })
    }
  }
}
</script>
