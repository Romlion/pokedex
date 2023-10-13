import './App.css'
import PokemonCard from './components/PokemonCard'
import {useState} from "react";


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  
  const handlePrevious = () => {
    if(pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    };
  };
    
  const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1){
       setPokemonIndex(pokemonIndex + 1);
    }
  };
  
  return (
      < section className='app'>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
          <div className='navigation'>
           <button onClick = {handlePrevious} disabled = {pokemonIndex === 0}>Précédent</button>
           <button onClick = {handleNext} disabled = {pokemonIndex === pokemonList.length - 1}>Suivant</button>
         </div>
      </section>
   );
  }

  const pokemonList = [
   {
     name: "bulbasaur",
     imgSrc:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const selectedPokemon = pokemonList[0];
    <>
      <PokemonCard pokemon={selectedPokemon} />
    </>

export default App;
