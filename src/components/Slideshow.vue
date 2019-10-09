<template>
  <div>
    <div class="w3-display-container">
      <img :src="slides[current].url" style="width:100%" />
      <div class="w3-display-topright w3-xlarge w3-container w3-padding-16 w3-black">
        <span class="w3-animate-top">{{slides[current].id + 1}} - {{slides[current].title}}</span>
      </div>
      <div
        class="w3-center w3-container w3-display-bottom-middle w3-section w3-large w3-text-white w3-display-bottommiddle"
        style="width:100%"
      >
        <div @click="backward" class="w3-button w3-left">&#10094;</div>
        <div @click="forward" class="w3-button w3-right">&#10095;</div>
        <span
          @click="set_slide(slide.id)"
          v-for="slide in slides"
          :key="slide.id"
          class="w3-badge w3-border w3-transparent w3-hover-white w3-orange"
          :class="{'w3-white': slide.id == current}"
        ></span>
      </div>
    </div>
    <div class="w3-panel w3-leftbar w3-light-grey">
      <p class="w3-large">
        <i>"Make it as simple as possible, but not simpler."</i>
      </p>
      <p>Albert Einstein</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      slides: [
        {
          id: 0,
          url: 'https://via.placeholder.com/1024x350',
          title: 'Las Flores',
          text: 'Slide text'
        },
        {
          id: 1,
          url: 'https://via.placeholder.com/1024x350',
          title: 'Partes de una Flor',
          text: 'Slide text'
        },
        {
          id: 2,
          url: 'https://via.placeholder.com/1024x350',
          title: 'Polinizacion',
          text: 'Slide text'
        },
        {
          id: 3,
          url: 'https://via.placeholder.com/1024x350',
          title: 'Tipos de Polinizacion',
          text: 'Slide text'
        }
      ]
    }
  },
  methods: {
    forward (event) {
      if (this.current < this.slides.length - 1) {
        this.current++
      }
    },
    backward () {
      if (this.current > 0) {
        this.current--
      }
    },
    set_slide (id) {
      this.current = id
    },
    keyPressed (event) {
      if (event.key === 'ArrowLeft') {
        this.backward()
      } else if (event.key === 'ArrowRight') {
        this.forward()
      }
    }
  },
  created () {
    window.addEventListener('keyup', this.keyPressed)
    // window.addEventListener('touchstart', this.forward)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w3-badge {
  cursor: pointer;
}
.w3-badge {
  height: 13px;
  width: 13px;
  padding: 0;
}
</style>
