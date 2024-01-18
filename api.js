const fetchPokemon = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => response.json()).then((data) => console.log(data));
}
// example call:
// fetchPokemon('ditto');
// fetchPokemon('pikachu')

module.exports = fetchPokemon;