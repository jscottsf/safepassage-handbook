<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-12" style="background-color: #111111; height: 80vh;" ref="cloud">
      </div>
    </div>
    <div class="row">
      <div class="col-12" style="height: 20vh;">
        <input type="text"
          class="form-control"
          placeholder="words"
          style="border: none; font-size: 150%; font-weight: 300; border-radius: 0; height: 100%"
          v-model="inputText">
      </div>
    </div>
  </section>
</template>

<script>
import debounce from 'lodash.debounce'
// import random from 'lodash/random'

const $ = global.$

export default {
  data () {
    return {
      inputText: ''
    }
  },

  created () {
    this.debouncedUpdate = debounce(() => {
      const words = this.inputText.split(' ').map((text, i, arr) => {
        return {
          text,
          weight: (i + 1) / arr.length
        }
      })

      $(this.$refs.cloud).jQCloud('update', words)
    }, 400)
  },

  mounted () {
    const words = [
      {text: 'Safe', weight: 50},
      {text: 'Passage', weight: 50}
    ]

    $(this.$refs.cloud).jQCloud(words, {
      autoResize: true,
      fontSize: {
        from: 0.06,
        to: 0.02
      }
    })
  },

  // computed: {
  // },

  // methods: {
  // },

  watch: {
    inputText () {
      this.debouncedUpdate()
    }
  }
}
</script>
