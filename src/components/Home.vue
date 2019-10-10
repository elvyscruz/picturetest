<template>
  <div class="w3-container">
    <h1 class="w3-lobster">Uso de Imagenes en el Aprendizaje Multimedia</h1>
    <div class="w3-panel w3-card w3-yellow w3-large">
      <p>
        Hola, mi nombre es Elvys Cruz 👨‍🏫, estudiante de Doctorado en el
        <a href="https://ace.edu">American College of Education.</a>
        Estoy haciendo una investigacion sobre el uso de diferentes tipos de
        imagenes en el aprendizaje multimedia. El objetivo de esta investigacion
        es comparar la retencion de los contenidos y el esfuerzo mental de los
        estudiantes universitarios en el aprendizaje multimedia usando distintos
        tipos de imagenes.📌
      </p>
    </div>
    <div class="w3-panel w3-card w3-yellow w3-large">
      <p>
        Su participacion en este estudio es 100% voluntaria y puede retirarse
        del mismo en cualquier momento si lo desea. Los resultados de este
        estudio seran publicados, pero su informacion personal no sera publicada
        o compartida. Si desea mas informacion sobre este estudio, me puede
        contactar al email 📨 elvys.cruz@gmail.com o al telefono 📲
        829-401-1010.
      </p>
    </div>
    <div class="w3-panel w3-card w3-yellow w3-large">
      <p>
        Si esta de acuerdo en participar en esta investigacion, escribir su
        email, seleccione "Acepto Participar" y hacer click en el boton
        "Continuar" mas abajo.
      </p>
    </div>
    <form class="w3-large" @submit.prevent="continuar">
      <p>
        <label for="email">Email</label>
        <br />
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Escriba su Email"
          required
        />
      </p>
      <p>
        <input
          v-model="consent"
          type="radio"
          name="consent"
          value
          class="w3-radio"
          required
        />
        <label>Acepto Participar</label>
      </p>
      <p>
        <input
          v-model="consent"
          type="radio"
          name="consent"
          value="false"
          class="w3-radio"
          required
        />
        <label>No voy a participar</label>
      </p>
      <input type="submit" class="w3-button w3-teal" value="Continuar" />
    </form>
    <div class="w3-modal" :class="{ 'w3-show': consent }">
      <div class="w3-modal-content">
        <div class="w3-container w3-xxxlarge">
          <span @click="consent = null" class="w3-button w3-display-topright"
            >&times;</span
          >
          <p>🙋‍♂️ Gracias de Todos Modos 👍</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PersonalQuestionnaireVue from './PersonalQuestionnaire.vue'

export default {
  data() {
    return { consent: null, email: '' }
  },
  methods: {
    continuar() {
      if (this.consent === '') {
        this.$router.push({ name: 'pq', params: { email: this.email } })
      }
    }
  }
}
</script>

<style scoped>
.w3-lobster {
  font-family: 'Lobster', serif;
}
</style>
