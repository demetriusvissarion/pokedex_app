const fetchPokemon = require('./api')

class Pokedex {
    constructor() {
        this.pokedex = []
    }

    catch(pokemon_name) {
        let newPokemon = fetchPokemon(pokemon_name)
        this.pokedex.push(newPokemon)
        return newPokemon
    }
}

module.exports = Pokedex;





// // in the node REPL
// const pokedex  = new Pokedex();
// pokedex.catch('pikachu'); // Adds pikachu to the pokedex

// // then, after some time has passed...
// pokedex.catch('jigglypuff'); // Adds jigglypuff to the pokedex

// // then, after some time has passed...
// pokedex.all(); // returns an array of the pokemon in the pokedex