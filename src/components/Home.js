import React from 'react';
import { useState } from 'react';

const Home = () => {
    const [pokemon, setPokemon] = useState({})


    const handlePokemon = e => {
        e.preventDefault()
        const name = e.target.name.value;

        fetch(`https://pokeapi.co/api/v2/berry/${name}`)
            .then(res => res.json())
            .then(data => setPokemon(data))


    }



    return (
        <div>
            <form onSubmit={handlePokemon}>
                <input type="text" placeholder='search by name' name='name' />
                <button type='submit'>Search</button>
            </form>

            <div>
                <h1>{pokemon.firmness?.name}</h1>
            </div>
        </div>

    );
};

export default Home;

