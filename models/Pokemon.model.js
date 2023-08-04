const mongoose = require("mongoose")

const pokemonSchema = new mongoose.Schema({
  number: Number,
  name: String,
  url: String,
  type: [String]
})

const Pokemon = mongoose.model("Pokemon", pokemonSchema)
// el Model es LA HERRAMIENTE con la que vamos a la base de datos a hacer cualquier gestion

module.exports = Pokemon