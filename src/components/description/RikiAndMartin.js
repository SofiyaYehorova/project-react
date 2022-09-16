import {useState} from "react";

function RikiAndMartin(){

    const [rikiandMartin, ]=useState();

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value => value.json())
        .then(value => {});

    return(
    <div>

    </div>
        )
}
export default RikiAndMartin;