<template>
  <div class="w3-container">
    <h1>Instrucciones</h1>
    <div class="w3-panel w3-card w3-yellow w3-large">
      <p>
        La siguiente seccion contiene una presentacion multimedia con el tema de
        <em>Las Flores y la Polinizacion</em>. Favor prestar atencion a la
        imagen mostrada y leer el texto correspondiente debajo de la imagen.
      </p>
      <p>
        Presione el boton
        <em>Continuar</em> para ver la presentacion
      </p>
    </div>
    <button @click="continuar" class="w3-button w3-pink w3-margin-top">
      Continuar
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    continuar() {
      localStorage.setItem(
        'pictureTest',
        ['photo', 'drawing', 'clipart'][Math.floor(Math.random() * 3)]
      )
      this.$router.push({ name: 'slideshow' })
    }
  }
}
</script>

<style></style>
