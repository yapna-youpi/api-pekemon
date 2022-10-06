const express = require("express");
const { success } = require('./Helper.js')

const pokemons = require('./mock_pockemon')

const app = express()
const port = 3001


app.use( (req , res , next) => {
        console.log(`url : ${req.url}`);
        next()
})

app.get('/',(req, res)=> res.send('hello vraiment il faut dire que: express est cool ! $$'))

app.get('/api/pokemons/:id/:name/:lenght', ( req, res) => {
    const id = req.params.id
    const name = req.params.name
    const lenght = req.params.lenght
    res.send(`Hello, vous avez demander le pokemon n° ${id} et le nom est ${name} avec la longueur ${lenght} ` )

})

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find( pokemon => pokemon.id === id ) 
    const message = ' un pokemon a bien été trouvé.'
    // res.send(`hello guy, vous avez demandé le pokemon ${pokemon.name} ou ${pokemon.picture}`)
    res.json(success(message, pokemon))
    
})

app.get('/api/pokemons', (req, res) => {
    
    let numb = pokemons.length
    let message = 'La liste complète des pokemons présents dans le pokedesk.'
    res.json(success(message, pokemons))

})

app.listen(port, () => console.log(`notre application Node est démarrée sur : http://localhost:${port}`))