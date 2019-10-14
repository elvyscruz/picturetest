<template>
  <div class="w3-container w3-content">
    <h1 class="w3-lobster">Esfuerzo Mental</h1>

    <div>
      <form @submit="continuar">
        <div class="w3-xlarge w3-yellow w3-panel w3-card w3-margin">
          En una escala del 1 al 7, donde 1 es muy bajo y 7 es muy alto, como
          calificarias el esfuerzo mental realizado durante esta presentacion?
        </div>
        <input
          class="w3-input"
          v-model="esfuerzo"
          type="number"
          name="esfuerzo"
          min="1"
          max="7"
          required
        />
        <div class="w3-xlarge w3-yellow w3-panel w3-card w3-margin">
          En una escala del 1 al 7, donde 1 es muy bajo y 7 es muy alto, como
          calificarias que tan dificil fue esta instruccion?
        </div>

        <input
          class="w3-input"
          v-model="dificultad"
          type="number"
          name="dificultad"
          min="1"
          max="7"
          required
        />
        <div class="w3-center w3-section">
          <input
            class="w3-deep-orange w3-button w3-margin-top"
            type="submit"
            value="Continuar"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      esfuerzo: null,
      dificultad: null
    }
  },
  methods: {
    continuar() {
      localStorage.setItem('fin_slideshow', '1')
      localStorage.setItem('esfuerzo', this.esfuerzo)
      localStorage.setItem('dificultad', this.dificultad)
      this.$router.push({ name: 'test' })
    }
  }
}
</script>

<style></style>
