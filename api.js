const fetchPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    return {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        types: data.types.map(type => type.type.name)
    }
};

module.exports = fetchPokemon;


// // in node
// const fetchPokemon = require('./api')
// fetchPokemon('charizard').then((pokemon) => console.log(pokemon))

// This should log:
// {
//   name: 'charizard',
//   id: 6,
//   height: 17,
//   weight: 905,
//   types: ['fire', 'flying']
// }