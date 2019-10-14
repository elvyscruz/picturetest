<template>
  <div class="w3-container">
    <div class="w3-display-container w3-content">
      <img :src="pictureUrl" width="100%" class="w3-image" />
      <div
        class="w3-center w3-container w3-display-bottom-middle w3-section w3-large w3-text-white w3-display-bottommiddle"
        style="width:100%"
      >
        <div @click="backward" class="w3-button w3-left w3-yellow">
          &#10094;
        </div>
        <div @click="forward" class="w3-button w3-right w3-yellow">
          &#10095;
        </div>
        <span
          @click="set_slide(slide.id)"
          v-for="slide in slides"
          :key="slide.id"
          class="w3-badge w3-border w3-transparent w3-hover-white w3-orange"
          :class="{ 'w3-white': slide.id === current }"
        ></span>
      </div>
    </div>
    <div class="w3-panel w3-leftbar w3-light-grey">
      <p class="w3-xlarge">
        <i>{{ slides[current].title }}</i>
      </p>
      <p class="w3-large">{{ slides[current].text }}</p>
    </div>
    <div class="w3-center">
      <button
        @click="fin_slideshow"
        v-show="current == slides.length - 1"
        class="w3-button w3-deep-orange w3-hover-orange w3-margin-bottom"
      >
        Finalizar Presentacion y Continuar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      test: ['photo', 'drawing', 'clipart'][Math.floor(Math.random() * 3)],
      slides: [
        {
          id: 0,
          url: {
            drawing: 'drawing.png',
            clipart: 'clipart.png',
            photo: 'photo.png'
          },
          title: 'La Flor: Definicion',
          text:
            'La flor es una parte de las plantas que, a través del proceso de la fecundación se convierte en fruto, dando origen a las semillas. La flor da origen a un fruto por transformacion de algunas de sus partes que contiene las semillas. '
        },
        {
          id: 1,
          url: {
            drawing: 'drawing.png',
            clipart: 'clipart.png',
            photos: 'photo.png'
          },
          title: 'La Flor: Funcion',
          text:
            'La funcion de una flor es producir semillas a traves de la reproduccion sexual. Para las plantas, las semillas son la proxima generacion, y sirven como el principal medio a traves del cual las especies se perpetuan y se propagan.'
        },
        {
          id: 2,
          url: {
            drawing: 'https://via.placeholder.com/1920x1080',
            clipart: '',
            photos: ''
          },
          title: 'La Flor y los Insectos',
          text:
            'Las flores tratan de atraer a los insectos a traves del color, la forma, el nectar y las fragancias para que faciliten la funcion de reproduccion de las mismas.'
        },
        {
          id: 3,
          url: {
            drawing: 'https://via.placeholder.com/1920x1080',
            clipart: '',
            photos: ''
          },
          title: 'Partes del Exterior una Flor',
          text:
            'La estructura mas caracteristica de las flores es su forma circular. Las partes principales de una flor son: Pedunculo, Caliz y Corola. El Pedunculo es la parte que sostiene la flor. El Caliz es la estructura similar a hojas verdes, llamadas cepalos, que protege y sostiene los petalos de la flor. La Corola esta compuesta por los petalos de la flor.'
        },
        {
          id: 4,
          url: {
            drawing: 'https://via.placeholder.com/1920x1080',
            clipart: '',
            photos: ''
          },
          title: 'Partes del Interior de una Flor',
          text:
            'El Pistilo y el Estambre son dos partes de la flor muy importantes. La parte femenina de la flor se llama Pistilo y la parte masculina se llama Estambre'
        },
        {
          id: 5,
          url: {
            drawing: 'https://via.placeholder.com/1920x1080',
            clipart: '',
            photos: ''
          },
          title: 'El Estambre',
          text:
            'El Estambre es la parte masculina de la flor. Esta compuesta por dos partes: la antera, que es la que lleva el polen y el filamento, que es el hilo que sostiene las anteras'
        },
        {
          id: 6,
          url: {
            drawing: 'https://via.placeholder.com/1920x1080',
            clipart: '',
            photos: ''
          },
          title: 'El Pistilo',
          text:
            'El Pistilo es la parte femenina de la flor y cuenta con 3 partes: a) Estigma, es la parte que atrapa el polen debido a su textura pegajosa, b) el Estilo, es el tubo que sostiene el estigma y sirve de conductor del ovario, y c) el Ovario, es el elemento clave que permite la reproduccion de las plantas y que contiene los ovulos en su interior'
        },
        {
          id: 7,
          url: {
            drawing: 'https://via.placeholder.com/1920x1080',
            clipart: '',
            photos: ''
          },
          title: 'Flores Perfectas e Imperfectas',
          text:
            'Las flores pueden tener todas las partes masculinas, todas las femeninas, o una combinación. Las flores con todas las partes masculinas, o todas femeninas son llamadas imperfectas, tales como: (los pepinos, calabaza y melones.) Las flores que tienen partes masculinas y femeninas se llaman perfectas (las rosas, lirios, etc)'
        },
        {
          id: 8,
          url: {
            drawing: 'https://via.placeholder.com/1920x1080',
            clipart: '',
            photos: ''
          },
          title: 'La Polinizacion',
          text:
            'Las plantas con flores se reproducen mediante un proceso llamado polinización, este consiste en la transferencia del polen de una flor a otra flor. La polinización puede realizarse de forma directa en una misma flor u otra flor en la misma planta o de forma cruzada entre 2 flores de la misma especie.'
        },
        {
          id: 9,
          url: {
            drawing: 'https://via.placeholder.com/1920x1080',
            clipart: '',
            photos: ''
          },
          title: 'El Polen',
          text:
            'El polen es una especie de polvo que se forma en el interior de las anteras que brotan del estambre de la flor. Este proceso de transferencia del polen desde los órganos masculinos de la planta, a los órganos femeninos se conoce como polinización. Y gracias a la polinización se generan las semillas, los frutos. Sin ella no existirían ni frutas ni verduras.'
        },

        {
          id: 10,
          url: {
            drawing: 'https://via.placeholder.com/1920x1080',
            clipart: '',
            photos: ''
          },
          title: 'Polinizacion a traves de Insectos',
          text:
            'Insectos como las abejas son atraídos por las flores brillantes y perfumadas. Cuando la abeja se acerca a la flor para recoger el néctar, el polen se pega a sus patas traseras. El estigma pegajoso de otra flor atrapa el polen cuando la abeja aterriza o vuela cerca de él.'
        },
        {
          id: 11,
          url: {
            drawing: 'https://via.placeholder.com/1920x1080',
            clipart: '',
            photos: ''
          },
          title: 'Polinizacion a traves del Viento',
          text:
            'Algunas flores usan el viento para transportar el polen. Sus estambres colgantes producen gran cantidad de polen que es lo suficientemente ligero como para ser llevado por el viento. Sus flores son generalmente pequeñas y no muy coloridas. Los estigmas de estas flores son pegajosos y cuelgan afuera de la flor para atrapar el polen a medida que este pasa'
        }
      ]
    }
  },
  methods: {
    forward(event) {
      if (this.current < this.slides.length - 1) {
        this.current++
      }
    },
    backward() {
      if (this.current > 0) {
        this.current--
      }
    },
    set_slide(id) {
      this.current = id
    },
    keyPressed(event) {
      if (event.key === 'ArrowLeft') {
        this.backward()
      } else if (event.key === 'ArrowRight') {
        this.forward()
      }
    },
    fin_slideshow() {
      //    localStorage.setItem('fin_slideshow', '1')
      this.$router.push({ name: 'mental' })
    }
  },
  computed: {
    pictureUrl: function() {
      return `img/${this.current}/${localStorage.getItem('test')}.png`
    }
  },
  created() {
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
