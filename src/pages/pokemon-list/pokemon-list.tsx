import React, { FunctionComponent, useEffect, useState } from 'react';
import Pokemon from '../../models/pokemon';
import POKEMONS from '../../models/moke-pokemons';
import PokemonCard from '../../components/pokemon-card';

const PokemonList: FunctionComponent = () => {
    // on initialise un tableau vide
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    // on modifie son contenu
    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <h1 className="center">POKéDEX</h1>
            <div className="container">
                <div className="row">
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon}  />
                ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonList;