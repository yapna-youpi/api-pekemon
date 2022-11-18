const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
    app.post('/api/pokemons', (req , res) => {
        Pokemon.create(req.body)
            .then( pokemon => {
                const message = `Le pokémon ${req.body.name} a bien été crée.`
                res.json({message, data: pokemon})
            })
            .catch( error => {
                const message = " le pokemon n'a pas pu etre ajouté. ressayez dans quelques instants."
                res.statut(500).json({message, data: error})
            })
    }) 
}
const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
    app.post('/api/pokemons', (req , res) => {
        Pokemon.create(req.body)
            .then( pokemon => {
                const message = `Le pokémon ${req.body.name} a bien été crée.`
                res.json({message, data: pokemon})
            })
            .catch( error => {
                const message = " le pokemon n'a pas pu etre ajouté. ressayez dans quelques instants."
                res.statut(500).json({message, data: error})
            })
    }) 
}
const { Pokemon } = require('../db/sequelize')

module.exports = (app) => {
    app.post('/api/pokemons', (req , res) => {
        Pokemon.create(req.body)
            .then( pokemon => {
                const message = `Le pokémon ${req.body.name} a bien été crée.`
                res.json({message, data: pokemon})
            })
            .catch( error => {
                const message = " le pokemon n'a pas pu etre ajouté. ressayez dans quelques instants."
                res.statut(500).json({message, data: error})
            })
    }) 
}