import React from "react";



const Pokecard = (props) =>{
let {obj} = props

let { base_experience, id, name, type } = obj


return(
    <>
    <div className="poke_card">
    <h3>{name}</h3>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
        {/* <p>{id}</p> */}
        {/* <p>{name}</p> */}
        <p>{type}</p>
        <p>{base_experience}</p>
    </div>
    </>
)




}





export default Pokecard