import "./App.css"
import {useState} from "react";
import NavBar from "./components/NavBar";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const pokemonList = [
    {
      id: 1,
      name: "bulbasaur",
      Image:
     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 2,
      name: "charmander",
      Image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id: 3,
      name: "squirtle",
      Image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id: 4,
      name: "pikachu",
      Image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      id: 5,
      name: "mew",
    },
  ];

  const handlePokemonClick = (pokemon) => {
    setCurrentPokemon(pokemon);
  };

  return (
    <div className="app">
      <NavBar pokemonList={pokemonList} onPokemonClick={handlePokemonClick} />
      <div className="pokemon-details">
        {currentPokemon ? (
          <div>
            <h2>{currentPokemon.name}</h2>
            <img src={currentPokemon.Image} alt={currentPokemon.name} />
          </div>
        ) : (
          <p>Sélectionnez un Pokémon</p>
        )}
      </div>
    </div>
  );
}

export default App;