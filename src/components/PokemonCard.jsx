import React from 'react';


const PokemonCard = (props) => {
  
const {pokemon} = props

  console.log(props);
  
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

export default PokemonCard;