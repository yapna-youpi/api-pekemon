const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
    app.get('api/pokemons', (req, res) => {
        Pokemon.findByPk(req.params.id)
            .then( pokemon => {
                const message = `Le pokémon à bien été trouvé.`
                res.json({message, data: pokemon})
            })
    })
}