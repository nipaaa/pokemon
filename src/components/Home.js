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
            <form onSubmit={handlePokemon} className="field">
                <h1>Pokemon</h1>
                <input type="text" placeholder='search by name (cheri, chesto, pecha)' name='name' />
                <button type='submit'>Search</button>
            </form>

            <div className='card'>
                <div>
                <h1>Name: {pokemon.firmness?.name}</h1>
                <h1>Item: {pokemon.item?.name}</h1>
                <h1>Natural Gift Power: {pokemon.natural_gift_power}</h1>
                <h1>Natural Gift Type: {pokemon.natural_gift_type?.name}</h1>
                <h1>Smoothness: {pokemon.smoothness}</h1>
                </div>
               
            </div>
        </div>

    );
};

export default Home;

