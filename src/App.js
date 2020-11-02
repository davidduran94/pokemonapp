import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PokemonForm from './PokemonForm';
import PokemonTable from './PokemonTable';
import { useState } from 'react';


function App() {
  const [listPokemon, setListPokemon] = useState([]);

  const searchPokemon = (item) => {
    console.log("searching ...", item);
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`)
      .then( (pokemon) => {
        reciveData(pokemon.data);
      })
      .catch((err) => {
        errorOnSearch(err);
      });
    
  };

  const errorOnSearch = err => {
    console.log("Pokemon not Found");
  }

  const reciveData = (data) => {
    console.log(data);
    let newPokemon = {};
    newPokemon.name = data.name;
    newPokemon.id = data.id;
    newPokemon.img = data.sprites.front_default;
    setListPokemon((listPokemon) => [...listPokemon, newPokemon]);
  };

  const handleSearch = (item) => {
    //buscar pokemon en API
    searchPokemon(item);
  };

  return (
    <div className="App">
      <header className="">
       <h1>Poke API</h1>
       <PokemonForm onNewPokemonSearch={handleSearch}></PokemonForm>
       {
         listPokemon.length == 0 ? <h3>No pokemon captured yet</h3> : <h3></h3>
       }
      </header>

      <PokemonTable listPokemon={listPokemon}></PokemonTable>
    </div>
  );
}

export default App;
