// Este archivo lo ejecutamos una vez para añadir toda la data a la DB
// esto es algo que hacemos para inicializar una DB
// esto no es algo que ese ejecuta conjuntamente con el servidor

const mongoose = require("mongoose")

// necesitamos la data
const allPokemon = require("./pokemon.json")
const Pokemon = require("../models/Pokemon.model.js")

// crear la conexión con la DB
mongoose.connect("mongodb://127.0.0.1:27017/simple-app")
.then(() => {
  console.log("conectados a la DB")

  // ???
  // insertMany ??
  return Pokemon.insertMany(allPokemon)
})
.then(() => {
  console.log("agregados los pokemon!, DB inicializada")
})
.catch((error) => {
  console.log(error)
})


