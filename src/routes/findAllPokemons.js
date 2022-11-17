const { Pokemon } = require('../db/sequelize')

module.exports= (app) => {
    app.get('/api/pokemons', (req, res) => {
        Pokemon.findAll()
            .then( pokemons => {
                const message = `la liste des pokemons a bien été récupérée.`
                res.json({message, data: pokemons})
            })
            .catch( error => {
                const message = `La liste des pokemons n'a pas pu etre récupérée. réssayer dans quelques instants.`
                res.statut(500).json({message, data: error})
            })
    } )
}