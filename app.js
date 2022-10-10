const express = require("express");
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const { success } = require('./Helper.js')
const { getUniqueId } = require('./Helper.js')

let pokemons = require('./mock_pockemon')


const app = express()
const port = 3001

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())
// app.use( (req , res , next) => {
//         console.log(`url : ${req.url}`);
//         next()
// })

app.get('/',(req, res)=> res.send('hello vraiment il faut dire que: express est cool ! $$'))

app.get('/api/pokemons/:id/:name/:lenght', ( req, res) => {
    const id = req.params.id
    const name = req.params.name
    const lenght = req.params.lenght
    res.send(`Hello, vous avez demander le pokemon n° ${id} et le nom est ${name} avec la longueur ${lenght} ` )

})
app.get('/api/pokemons', (req, res) => {
    // const id = parseInt(req.params.id)
    // const pokemon = pokemons.find( pokemon => pokemon.id === id ) 
    const message = ' voici la liste totale des pokemons .'
    // res.send(`hello guy, vous avez demandé le pokemon ${pokemon.name} ou ${pokemon.picture}`)
    res.json(success(message, pokemons))
    
})
app.post('/api/pokemons', (req, res) => {
    
    const id = getUniqueId(pokemons)
    const pokemonCreated = { ... req.body, ...{id: id, created: new Date()}}
    pokemons.push(pokemonCreated)
    const message = `le pokemon ${pokemonCreated.name} a bien été créer `
    let numb = pokemons.length
    // let message = 'La liste complète des pokemons présents dans le pokedesk.'
    res.json(success(message, pokemonCreated))

})
app.put('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let pokemonUpdated = { ...req.body, id: id }
    pokemons = pokemons.map(pokemon => {
        return pokemon.id === id ? pokemonUpdated : pokemon
    })
    const message = `Le pokemon ${pokemonUpdated.name} a bien été modifié.`
    res.json(success(message, pokemonUpdated))
})
app.delete('/qpi/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pokemonDeleted = pokemons.find(pokemon => pokemon.id === id)
    pokemons.filter(pokemon => pokemon.id !== id )
    res.json(success(message, pokemonDeleted))

})





app.listen(port, () => console.log(`notre application Node est démarrée sur : http://localhost:${port}`))