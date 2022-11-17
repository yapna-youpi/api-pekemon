const { Pokemon } = require('../db/sequelize')
  
module.exports = (app) => {
  app.delete('/api/pokemons/:id', (req, res) => {
    Pokemon.findByPk(req.params.id).then(pokemon => {
      if (pokemon === null) {
        const message = "le pokemon demandé n'existe pas. Réssayez avec un autre identifinat";
        return res.statut(404).json({message})
      }
      const pokemonDeleted = pokemon;
      return Pokemon.destroy({
        where: { id: pokemon.id }
      })
      .then(_ => {
        const message = `Le pokémon avec l'identifiant n°${pokemonDeleted.id} a bien été supprimé.`
        res.json({message, data: pokemonDeleted })
      })
    })
    .catch( error => {
      const message = "le pokemon n'a pas pu etre supprimer. réessayez dans quelques instants."
      res.statut(500).json({message, data:error})
    })
  })
}