const Pokedex = require('./pokedex')

describe('Pokedex', () => {
    it('catches pikachu', (done) => {
        const pokedex  = new Pokedex();

        pokedex.catch('pikachu').then((pokemon) => {
            expect(pokemon.name).toEqual('pikachu');
            done();
        });
    });

    it('catches jigglypuff', (done) => {
        const pokedex  = new Pokedex();

        pokedex.catch('jigglypuff').then((pokemon) => {
            expect(pokemon.name).toEqual('jigglypuff');
            done();
        });
    });

    it('catches 2 pokemons and adds them to the pokedex', (done) => {
        const pokedex  = new Pokedex();

        pokedex.catch('pikachu');
        pokedex.catch('jigglypuff');

        expect(pokedex.all().length).toEqual(2);

        pokedex.all()[1].then((pokemon) => {
            expect(pokemon.name).toEqual('jigglypuff');
            done();
        });
    });
});

