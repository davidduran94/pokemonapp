import "./styles/pokemonItem.css"
import React from "react";

function PokemonItem(props){
    return (
        <div className="poke">
            <img className="poke_img" src={props.data.img} alt="pokemon"/>
            <p className="poke_name">{props.data.name}</p>
            <p className="poke_id">{props.data.id}</p>
        </div>
    )
}

export default PokemonItem;