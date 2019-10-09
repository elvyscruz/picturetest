<template>
  <div class="w3-container w3-content">
    <div class="w3-display-container">
<img :src="slides[current].url" style="width:100%">
<div class="w3-display-topright w3-container w3-padding-16 w3-black">{{slides[current].title}}</div>
  </div>
<button @click="backward" class="w3-button w3-display-left">&#10094;</button>
<button @click="forward"  class="w3-button w3-display-right">&#10095;</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      slides: [
        { id: 0,
          url: 'https://via.placeholder.com/800x600/008080',
          title: 'Slide Title 1',
          text: 'Slide text'
        }, { id: 1,
          url: 'https://via.placeholder.com/800x600/046040',
          title: 'Slide Title 2',
          text: 'Slide text'
        }, { id: 2,
          url: 'https://via.placeholder.com/800x600/028510',
          title: 'Slide Title 3',
          text: 'Slide text'
        }
      ]
    }
  },
  methods: {
    forward () {
      if (this.current < this.slides.length - 1) {
        this.current++
      }
    },
    backward () {
      if (this.current > 0) {
        this.current--
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
