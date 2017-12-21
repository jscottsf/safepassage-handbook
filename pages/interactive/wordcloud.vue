<template>
  <section class="vh-100 d-flex flex-column">
    <div class="h-100" style="background-color: #111111;" ref="cloud" />

    <input type="text"
      class="form-control"
      placeholder="word, word, ..."
      style="border: none; font-size: 150%; font-weight: 300; border-radius: 0; xheight: 100%"
      v-model="inputText">
  </section>
</template>

<script>
import chroma from 'chroma-js'
import debounce from 'lodash/debounce'
import shuffle from 'lodash/shuffle'

const $ = global.$

export default {
  data () {
    return {
      colors: shuffle([...chroma.brewer.Blues, ...chroma.brewer.YlGn, ...chroma.brewer.YlOrRd, ...chroma.brewer.PuRd, ...chroma.brewer.BuGn].map(color => {
        return chroma(color).luminance(0.5, 'hsl')
      })),

      inputText: ''
    }
  },

  created () {
    this.debouncedUpdate = debounce(() => {
      $(this.$refs.cloud).jQCloud('update', this.words)
    }, 400)
  },

  mounted () {
    console.log('colors', this.colors)

    $(this.$refs.cloud).jQCloud(this.words, {
      autoResize: true,
      fontSize: {
        from: 0.06,
        to: 0.02
      }
    })
  },

  computed: {
    words () {
      const words = this.inputText.split(',').map(text => {
        return text.trim()
      }).filter(text => {
        return text.length > 0
      }).map((text, i, arr) => {
        return {
          color: this.colors[i % this.colors.length],
          text,
          weight: (i + 1) / arr.length
        }
      })

      if (words.length) return words

      return [
        {text: 'Safe Passage', weight: 1}
      ]
    }
  },

  watch: {
    inputText () {
      this.debouncedUpdate()
    }
  }
}
</script>
