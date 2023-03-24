import React from "react";
import Pokecard from "./pokecard";

const Pokedex = (props) =>{

    let { pokemons } = props


    console.log(pokemons)
    return(
        <>
        <div className="poke_holder">
            {pokemons.map(poke => <Pokecard obj={poke}/> )}
        </div>
        {console.log('working')}
        </>
    )
}

export default Pokedex