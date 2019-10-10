<template>
  <div class="w3-container">
    <h1>Please answer the following questions</h1>
    <div>
      <form>
        <p>
          <label for="genero">Cual es su genero?</label>
          <br />
          <input
            type="radio"
            name="genero"
            value="masculino"
            class="w3-radio"
          />
          <label for="Masculino">Masculino</label>
        </p>
        <p>
          <input type="radio" name="genero" value="femenino" class="w3-radio" />
          <label for="genero">Femenino</label>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
