import React from 'react';
import PropTypes from "prop-types";

const PokemonCard = (props) => {
  
const {pokemon} = props

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
}

PokemonCard.propTypes = {
 pokemon: PropTypes.shape({
   name: PropTypes.string.isRequired,
   imgSrc: PropTypes.string,
 }).isRequired,
};

export default PokemonCard;
