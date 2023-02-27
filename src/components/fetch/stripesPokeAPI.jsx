import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Stripes() {
    const [stripes, setStripes] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon-form?limit=9');
        setStripes(response.data.results);
        }

        fetchData();
    }, []);

    return (
        <div>
            {stripes.map((stripe, index) => (
                <img
                key={index}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/pokemon/${index + 1}.png`}
                alt={`Stripe ${index}`}
                />
            ))}
        </div>
    );
}

export default Stripes;
  