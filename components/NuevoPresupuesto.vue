<template>
  <div class="contenedor contenedor-presupuesto sombra">
    <form class="formulario">
      <div class="campo">
        <label>Definir presupuesto</label>
        <input
          class="nuevo-presupuesto"
          type="text"
          placeholder="Añade tu presupuesto"
        />
      </div>
      <input type="submit" value="Añadir" />
    </form>
  </div>
</template>

<style scoped>
.contenedor {
  width: 90%;
  max-width: 70rem;
  margin: 0 auto;
}

.contenedor-presupuesto {
  margin-top: -5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(5rem);
}

.formulario {
  width: 95%;
  margin: 0 auto;
  padding: 5rem 0;
}

.campo {
  display: grid;
  margin-bottom: 2rem;
}

.formulario label {
  color: var(--azul);
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

.formulario input[type="text"],
.formulario input[type="number"] {
  background-color: var(--gris-claro);
  border-radius: .5rem;
  padding: 1rem;
  border: none;
  flex: 1;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

.formulario input[type="submit"] {
  background-color: #1048a4;
  border: none;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
  color: var(--blanco);
  font-weight: 900;
  font-size: 2rem;
  width: 100%;
  transition: background-color 300ms ease;
  border-radius: 0.5rem;
}

.formulario legend {
  font-size: 3.6rem;
  text-align: center;
  display: block;
  text-transform: uppercase;
  color: var(--blanco);
  margin-bottom: 4rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--azul);
}

.formulario input[type="submit"]:hover {
  background-color: #042a67;
  cursor: pointer;
}

.formulario select {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  text-align: center;
  background-color: var(--gris-claro);
}
</style>
