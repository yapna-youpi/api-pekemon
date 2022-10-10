exports.success = (message, data) => {
    return {message, data}
}

exports.getUniqueId = (pokemons) => {
    const pokemonsIds = pokemons.map( pokemon => pokemon.id)
    const maxId = pokemonsIds.reduce( (acc , val ) => Math.max(acc, val))
    const uniqueId = maxId + 1
    return uniqueId
}