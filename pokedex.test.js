const Pokedex = require('./pokedex')

describe('Pokedex', () => {
    it('catches pikachu', (done) => {
        const pokedex  = new Pokedex();

        pokedex.catch('pikachu').then((pokemon) => {
            expect(pokemon.name).toEqual('pikachu');
            done();
        });
    });

    // it('catches jigglypuff', (done) => {
    //     const pokedex  = new Pokedex();

    //     pokedex.catch('jigglypuff')
    //     .then((pokemon) => {
    //         expect(pokemon.name).toEqual('jigglypuff');
    //         done();
    //     });
    // });

    // it('catches pokemons and adds them to the pokedex', (done) => {
    //     const pokedex  = new Pokedex();

    //     pokedex.catch('pikachu');
    //     pokedex.catch('jigglypuff');

    //     pokedex.all().then((pokedex) => {
    //         expect(pokedex.length).toEqual(2);
    //         done();
    //     });
    // });
});

