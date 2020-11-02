import React from "react";

function PokemonForm(props){
    const style = {

    }

    let searchPokemon = (evt) => {
        evt.preventDefault();
        let name_pokemon = evt.target.pokemonName.value;
        props.onNewPokemonSearch(name_pokemon);
    }

    return (
        <form onSubmit={searchPokemon}>
            <label></label>
            <input type="text" name="pokemonName">
            </input>
            <input type="submit" value="Add Pokemon" />
        </form>
    )
}

export default PokemonForm;