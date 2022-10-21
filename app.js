const express = require("express");
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const { initDb } = require('./src/db/sequelize')

const app = express()
const port = 3001
    
app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

sequelize.initDb()

// Ici nous placerons nos futurs points de terminaison.

//1-point de terminaison pour recuperer la liste de tous les pokémons.
require('./src/routes/findAllPokemons')(app)
//2-point d'entrer pour recuperer un precisement
require('./src/routes/findPokemonByPk')(app)
//3-point de terminaison pour créer un pokemon
require('./src/routes/createPokemon')(app)


app.listen(port, () => console.log(`notre application Node est démarrée sur : http://localhost:${port}`))