<template>
  <div class="w3-container">
    <h1>Favor contestar las siguientes preguntas</h1>
    <div>
      <form @submit.prevent="continuar">
        <p>
          <label for="genero">Cual es su genero?</label>
          <br />
          <input
            v-model="genero"
            type="radio"
            name="genero"
            value="masculino"
            class="w3-radio"
            required
          />
          <label for="Masculino">Masculino</label>
        </p>
        <p>
          <input
            v-model="genero"
            type="radio"
            name="genero"
            value="femenino"
            class="w3-radio"
            required
          />
          <label for="genero">Femenino</label>
        </p>
        <p>
          <label for="edad">Cual es su rango de edad?</label>
          <br />
          <input
            v-model="edad"
            type="radio"
            name="edad"
            value="17-24"
            class="w3-radio"
            required
          />
          <label for="edad">De 17 a 24</label>
        </p>
        <p>
          <input
            v-model="edad"
            type="radio"
            name="edad"
            value="25-30"
            class="w3-radio"
            required
          />
          <label for="edad">De 25 a 30</label>
        </p>
        <p>
          <input
            v-model="edad"
            type="radio"
            name="edad"
            value="masde30"
            class="w3-radio"
            required
          />
          <label for="edad">Mas de 30</label>
        </p>
        <p>
          <label for="carrera">Cual es su area de estudio?</label>
          <br />
          <select v-model="carrera" class="w3-select" name="carrera" required>
            <option value disabled selected>Escoja una opcion</option>
            <option value="Administracion">Administracion</option>
            <option value="Contabilidad">Contabilidad</option>
            <option value="Derecho">Derecho</option>
            <option value="Educacion">Educacion</option>
            <option value="Informatica">Informatica</option>
            <option value="Industrial">Ingenieria Industrial</option>
            <option value="Electrica">Ingenieria Electrica</option>
            <option value="Electronica">Ingenieria Electronica</option>
            <option value="Mercadeo">Mercadeo</option>
            <option value="Medicina">Medicina</option>
            <option value="Otra">Otra</option>
          </select>
        </p>
        <p>
          <label for>
            En una escala del 1 al 7, donde 1 es muy poco y 7 es mucho, como
            calificaria su interes personal en las flores y la botanica?
          </label>
          <input
            v-model="interes"
            class="w3-input"
            type="number"
            name="conocimientoPrevio"
            min="1"
            max="7"
            required
          />
        </p>
        <input
          type="submit"
          value="Continuar"
          class="w3-button w3-deep-orange"
        />
      </form>
    </div>
  </div>
</template>

<script>
// import SheetDB from 'sheetdb-js'
export default {
  data() {
    return {
      genero: null,
      edad: null,
      carrera: null,
      interes: null
    }
  },
  methods: {
    continuar() {
      // SheetDB.write('https://sheetdb.io/api/v1/kcrrp64tuz8jo', {
      //   sheet: 'Sheet1',
      //   data: {
      //     fecha: new Date().toLocaleString(),
      //     email: this.$route.params.email,
      //     genero: this.genero,
      //     edad: this.edad,
      //     carrera: this.carrera,
      //     interes: this.interes
      //   }
      // }).then(
      //   function(result) {
      //     console.log(result)
      //   },
      //   function(error) {
      //     console.log(error)
      //   }
      // )
      this.$router.push({ name: 'intro' })
    }
  },
  props: {
    email: {
      type: String
    }
  },
  created() {}
}
</script>

<style></style>
