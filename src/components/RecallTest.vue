<template>
  <div class="w3-container w3-content">
    <h1 class="w3-lobster">
      Seleccione la respuesta correcta segun corresponda
    </h1>
    <div>
      <form @submit.prevent="enviar" class="w3-large">
        <div>
          <label for>
            Las plantas se reproducen a traves de un proceso llamado
            polinizacion
          </label>
          <p>
            <input
              required
              v-model="p1"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Falso</label>
          </p>
          <p>
            <input
              required
              v-model="p1"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Verdadero</label>
          </p>
          <hr />
        </div>
        <div>
          <label for
            >La Polinizacion puede ocurrir dentro de la misma flor</label
          >
          <p>
            <input
              required
              v-model="p2"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Falso</label>
          </p>
          <p>
            <input
              required
              v-model="p2"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Verdadero</label>
          </p>
          <hr />
        </div>
        <div>
          <label for
            >La Polinizacion puede ocurrir entre flores de la misma
            planta</label
          >
          <p>
            <input
              required
              v-model="p3"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Falso</label>
          </p>
          <p>
            <input
              required
              v-model="p3"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Verdadero</label>
          </p>
          <hr />
        </div>
        <div>
          <div>
            <label for>
              La Polinizacion puede ocurrir entre flores de plantas diferentes
              de la misma especie
            </label>
            <p>
              <input
                required
                v-model="p4"
                class="w3-radio"
                type="radio"
                value="0"
              />
              <label>Falso</label>
            </p>
            <p>
              <input
                required
                v-model="p4"
                class="w3-radio"
                type="radio"
                value="1"
              />
              <label>Verdadero</label>
            </p>
            <hr />
          </div>
          <label for
            >Las 2 principales vias de polinizacion de las flores son</label
          >
          <p>
            <input
              required
              v-model="p5"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Agua y Tierra</label>
          </p>
          <p>
            <input
              required
              v-model="p5"
              class="w3-radio"
              type="radio"
              value="00"
            />
            <label>Aroma y Viento</label>
          </p>
          <p>
            <input
              required
              v-model="p5"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Insectos y Viento</label>
          </p>
          <hr />
        </div>
        <div>
          <label for>
            En la polininizacion realizada por viento, las plantas por lo
            general tienen las flores...
          </label>
          <p>
            <input
              required
              v-model="p6"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Grandes y coloridas</label>
          </p>
          <p>
            <input
              required
              v-model="p6"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Pequenas y poco coloridas</label>
          </p>
          <p>
            <input
              required
              v-model="p6"
              class="w3-radio"
              type="radio"
              value="00"
            />
            <label>Aromaticas y coloridas</label>
          </p>
          <hr />
        </div>
        <div>
          <label for>
            Si la flor tiene petalos con colores llamativos, como ocurre la
            polinizacion?
          </label>
          <p>
            <input
              required
              v-model="p7"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Con Insectos</label>
          </p>
          <p>
            <input
              required
              v-model="p7"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Por el Viento</label>
          </p>
          <p>
            <input
              required
              v-model="p7"
              class="w3-radio"
              type="radio"
              value="00"
            />
            <label>Por el Agua</label>
          </p>
          <hr />
        </div>
        <div>
          <label for>La funcion principal de la flor es..</label>
          <p>
            <input
              required
              v-model="p8"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Producir Nectar</label>
          </p>
          <p>
            <input
              required
              v-model="p8"
              class="w3-radio"
              type="radio"
              value="00"
            />
            <label>Producir Aromas</label>
          </p>
          <p>
            <input
              required
              v-model="p8"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Producir semillas a traves de la reproducion sexual</label>
          </p>
          <hr />
        </div>
        <div>
          <label for>
            Es una estructura similar a hojas verdes que protege y sostiene los
            petalos de una flor
          </label>
          <p>
            <input
              required
              v-model="p9"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Penduculo</label>
          </p>
          <p>
            <input
              required
              v-model="p9"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Caliz</label>
          </p>
          <p>
            <input
              required
              v-model="p9"
              class="w3-radio"
              type="radio"
              value="00"
            />
            <label>Corola</label>
          </p>
          <hr />
        </div>
        <div>
          <label for>Es la parte masculina de la flor</label>
          <p>
            <input
              required
              v-model="p10"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Estambre</label>
          </p>
          <p>
            <input
              required
              v-model="p10"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Pistilo</label>
          </p>
          <p>
            <input
              required
              v-model="p10"
              class="w3-radio"
              type="radio"
              value="00"
            />
            <label>Corola</label>
          </p>
          <hr />
        </div>
        <div>
          <label for>Es la parte femenina de la flor</label>
          <p>
            <input
              required
              v-model="p11"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Estambre</label>
          </p>
          <p>
            <input
              required
              v-model="p11"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Pistilo</label>
          </p>
          <p>
            <input
              required
              v-model="p11"
              class="w3-radio"
              type="radio"
              value="00"
            />
            <label>Corola</label>
          </p>
          <hr />
        </div>
        <div>
          <label for>El estambre esta compuesto de..</label>
          <p>
            <input
              required
              v-model="p12"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Estilo y Ovario</label>
          </p>
          <p>
            <input
              required
              v-model="p12"
              class="w3-radio"
              type="radio"
              value="00"
            />
            <label>Estigma y Estilo</label>
          </p>
          <p>
            <input
              required
              v-model="p12"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Antera y filamento</label>
          </p>
          <hr />
        </div>
        <div>
          <label for>El pistilo esta compuesto de..</label>
          <p>
            <input
              required
              v-model="p13"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Estigma, Estilo y Ovario</label>
          </p>
          <p>
            <input
              required
              v-model="p13"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Estigma y Antera</label>
          </p>
          <p>
            <input
              required
              v-model="p13"
              class="w3-radio"
              type="radio"
              value="00"
            />
            <label>Antera y filamento</label>
          </p>
          <hr />
        </div>
        <div>
          <label for>Es un polvo que se forma en el interior de una flor</label>
          <p>
            <input
              required
              v-model="p14"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Polen</label>
          </p>
          <p>
            <input
              required
              v-model="p14"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>Antera</label>
          </p>
          <p>
            <input
              required
              v-model="p14"
              class="w3-radio"
              type="radio"
              value="00"
            />
            <label>Estigma</label>
          </p>
          <hr />
        </div>
        <div>
          <label for>
            Las flores pueden tener partes masculinas y femeninas en una misma
            flor
          </label>
          <p>
            <input
              required
              v-model="p15"
              class="w3-radio"
              type="radio"
              value="1"
            />
            <label>Verdadero</label>
          </p>
          <p>
            <input
              required
              v-model="p15"
              class="w3-radio"
              type="radio"
              value="0"
            />
            <label>falso</label>
          </p>
          <hr />
        </div>
        <input
          required
          class="w3-button w3-hover-deep-orange w3-teal w3-margin-bottom"
          type="submit"
          value="Enviar y Finalizar"
        />
      </form>
    </div>
  </div>
</template>

<script>
import SheetDB from 'sheetdb-js'
export default {
  data() {
    return {
      p1: null,
      p2: null,
      p3: null,
      p4: null,
      p5: null,
      p6: null,
      p7: null,
      p8: null,
      p9: null,
      p10: null,
      p11: null,
      p12: null,
      p13: null,
      p14: null,
      p15: null
    }
  },
  created() {
    localStorage.setItem('fecha_inicio', new Date().toLocaleString())
  },
  methods: {
    enviar() {
      const that = this

      SheetDB.write('https://sheetdb.io/api/v1/kcrrp64tuz8jo', {
        sheet: 'Sheet1',
        data: {
          fecha_inicio: localStorage.getItem('fecha_inicio'),
          fecha_fin: new Date().toLocaleString(),
          email: localStorage.getItem('email'),
          matricula: localStorage.getItem('matricula'),
          test: localStorage.getItem('test'),
          genero: localStorage.getItem('genero'),
          edad: localStorage.getItem('edad'),
          carrera: localStorage.getItem('carrera'),
          interes: localStorage.getItem('interes'),
          p1: Number(this.p1),
          p2: Number(this.p2),
          p3: Number(this.p3),
          p4: Number(this.p4),
          p5: Number(this.p5),
          p6: Number(this.p6),
          p7: Number(this.p7),
          p8: Number(this.p8),
          p9: Number(this.p9),
          p10: Number(this.p10),
          p11: Number(this.p11),
          p12: Number(this.p12),
          p13: Number(this.p13),
          p14: Number(this.p14),
          p15: Number(this.p15)
        }
      }).then(
        function(result) {
          localStorage.removeItem('fecha_inicio')
          localStorage.removeItem('fecha_fin')
          localStorage.removeItem('email')
          localStorage.removeItem('test')
          localStorage.removeItem('genero')
          localStorage.removeItem('edad')
          localStorage.removeItem('carrera')
          localStorage.removeItem('interes')
          localStorage.removeItem('fin_slideshow')

          that.$router.push({ name: 'fin' })
        },
        function(error) {
          console.log(error)
        }
      )
    }
  }
}
</script>

<style></style>
