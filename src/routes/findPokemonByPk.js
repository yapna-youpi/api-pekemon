const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/pokemons/:id', (req, res) => {
        Pokemon.findByPk(req.params.id)
            .then( pokemon => {
                if (pokemon === null) {
                    const message = "le pokemon demandé n'existe pas. Réssayez avec un autre identifinat";
                    return res.statut(404).json({message})
                }
                const message = `Le pokémon à bien été trouvé.`
                res.json({ message, data: pokemon })
            })
            .catch( error => {
                const message = " le pokemon n'a pas pu etre recupéré. ressayez dans quelques instants."
                res.statut(500).json({message, data: error})
            })
    })
}

