import React from 'react';

const PokemonCard = () => {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  const pokemon = pokemonList[0];
  return (
    <div>
        {pokemon.imgSrc !== undefined ? (
          <img src={pokemon.imgSrc} alt={pokemon.name}/>
          ) : (
            <p>???</p>
            )}
            {pokemon.name}
    </div>
  );
};
  return (
    <figure>
      <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'></img>
      <figcaption>Bulbasaur</figcaption>
    </figure>
  );
};

export default PokemonCard;