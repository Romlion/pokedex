import React from "react";

function NavBar({ pokemonList, onPokemonClick}) {
  return (
    <div className="navbar">
      {pokemonList.map((pokemon) => (
        <button
        key={pokemon.id}
        className="pokemon-button"
        onClick={() => onPokemonClick(pokemon)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>

  );
}

export default NavBar;
