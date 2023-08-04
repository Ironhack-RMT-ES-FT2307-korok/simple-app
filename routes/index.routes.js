const express = require('express');
const router = express.Router();

const Pokemon = require("../models/Pokemon.model")
// el modelo es la manita para ir a hacer modificaciones en la DB

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/pokemon", (req, res, next) => {

  // 1. buscar los documentos de la colección pokemons
  Pokemon.find()
  .select({name: 1}) // solo devuelve los nombres de los Pokemon
  .then((pokemon) => {
    // 2. obtener solo los nombres
    console.log( pokemon )
    // 3. renderizar una vista
    res.render("name-pokemon.hbs", {
      pokemonNames: pokemon,
      algo: "patata"
    })
  })
  .catch((error) => {
    next(error)
  })
  // 4. en la vista mostrar la data (los nombres de los pokemon)

})

router.get("/pokemon/:pokemonId", (req, res, next) => {

  // 1. como los nombres pueden ser enlaces que me lleven a esta ruta
  // 2. de donde sacamos el id?
  
  let pokemonId = req.params.pokemonId;
  // let { pokemonId } = req.params
  
  console.log(pokemonId)
  // console.log(req.params.pokemonId)
  // 3. como buscamos a ese pokemon en especifico
  Pokemon.findById(pokemonId)
  .then((response) => {
    console.log(response)
    
    res.render("pokemon-details.hbs", {
      pokemon: response
    })
    // como renderizamos la data en la vista
  })
  .catch((error) => {
    next(error)
  })



})

module.exports = router;
