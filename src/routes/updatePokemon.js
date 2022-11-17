const { Pokemon } = require('../db/sequelize')
  
module.exports = (app) => {
  app.put('/api/pokemons/:id', (req, res) => {
    const id = req.params.id
    Pokemon.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Pokemon.findByPk(id).then(pokemon => {
        if (pokemon === null) {
          const message = "le pokemon demandé n'existe pas. Réssayez avec un autre identifinat";
          return res.status(404).json({message})
        }
        const message = `Le pokémon ${pokemon.name} a bien été modifié.`
        res.json({message, data: pokemon })
      })
    })
    .catch( error => {
      const message = " le pokemon n'a pas pu etre modifié. ressayez dans quelques instants."
      res.statut(500).json({message, data: error})
    })
  })
}