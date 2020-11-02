import './styles/pokemonTable.css';
import React  from "react";
import PokemonItem from "./PokemonItem";


function PokemonTable(props){
    
    return (
        <table>
            <thead>
            </thead>
            <tbody>
                {props.listPokemon.map((value, index) => {
                    return (
                        <tr key={index}>
                            <PokemonItem data={value}></PokemonItem>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default PokemonTable;