import React from 'react';
import PropTypes from "prop-types";


const PokemonCard = ({pokemon}) => {
  return(
    <div className='pokemon-card'>
      <h2>{pokemon.name}</h2>
      {pokemon.imgSrc ? (
      <img src={pokemon.imgSrc} alt={pokemon.name} />
       ) : (
        <p>???</p>
      )}
    </div>
  );
};

PokemonCard.propTypes = {
 pokemon: PropTypes.shape({
   name: PropTypes.string.isRequired,
   imgSrc: PropTypes.string,
 }).isRequired,
};

export default PokemonCard;
