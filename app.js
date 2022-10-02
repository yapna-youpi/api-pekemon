const express = require("express");
let pokemons = require('./mock_pockemon')

const app = express()
const port = 3000

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
    res.send(`hello guy, vous avez demandé le pokemon ${pokemon.name} ou ${pokemon.picture}`)

    
})

app.get('/api/pokemons', (req, res) => {
    
    let numb = pokemons.length
    // let pokedesk = pokemons.forEach(element => {
    //     element
    // });
    res.send( ` il y'a environ ${numb} pokemons dans le pokedex pour le moment`)
    res.send( ` il y'a environ ${numb} pokemons dans le pokedex pour0 le moment est `)

})

app.listen(port, () => console.log(`notre application Node est démarrée sur : http://localhost:${port}`))