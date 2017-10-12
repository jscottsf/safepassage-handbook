<template>
  <section class="container-fluid pt-header">
    <div class="row" v-if="texts">
      <div class="col-12 pt-4 text-center" v-for="text in texts">
        <div class="card">
          <div class="card-block">
            <samp class="card-title display-3">{{ text }}</samp>
          </div>
        </div>
      </div>

      <div class="col-12 pt-4 text-center">
        <button type="button" class="btn btn-primary btn-lg mx-1" @click="reveal">Reveal</button>
        <button type="button" class="btn btn-primary btn-lg mx-1" @click="next">Next</button>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12 pt-4 text-center">
        <h1>No more!</h1>
      </div>
    </div>
  </section>
</template>

<script>
import random from 'lodash/random'

export default {
  data () {
    return {
      items: [{
        translations: {
          en: 'Strive to model safe behavior',
          es: 'Esforzarse de tener una conducta y modelo de seguridad'
        }
      }, {
        translations: {
          en: 'Individual safety is our top priority',
          es: 'Seguridad Individual es nuestra mayor prioridad'
        }
      }, {
        translations: {
          en: 'Follow traffic signals',
          es: 'Siga las señales de trafico'
        }
      }, {
        translations: {
          en: 'Stay within designated crossing areas',
          es: 'Manténgase dentro de las áreas de cruce asignadas'
        }
      }, {
        translations: {
          en: 'Do not block crosswalk',
          es: 'No obstruya el cruce de peatones'
        }
      }],
      current: {},
      hidden: [],
      texts: []
    }
  },

  mounted () {
    this.next()
  },

  methods: {
    updateTexts () {
      this.texts = Object.entries(this.current.translations).map(([lang, text]) => {
        return Array.from(text).map(c => this.hidden.includes(c) ? '_' : c).join('')
      })
    },
    next () {
      const avails = this.items.filter(item => !item.isDone)

      if (!avails || (avails.length === 0)) {
        this.current = this.texts = null
        return
      }

      this.current = avails[random(0, avails.length - 1)]
      this.current.isDone = true

      this.hidden = [...new Set(Object.entries(this.current.translations).reduce((ary, [lang, text]) => {
        return ary.concat(Array.from(text))
      }, []))].filter(l => l !== ' ')

      this.updateTexts()
    },
    reveal () {
      this.hidden[random(0, this.hidden.length - 1)] = null
      this.hidden = this.hidden.filter(ch => ch > '')

      this.updateTexts()
    }
  }
}
</script>
