import {useState} from "react";
import Character from "./Character";

function RikiAndMartin(){

    const [RikiAndMartin, setRikiAndMartin] = useState([]);

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value => value.json())
        .then(value => {
            setRikiAndMartin(value.results.splice(0,6));
        });

    return(
    <div>
        {
            RikiAndMartin.map(person =>
                <Character
                    key={person.id}
                    character={person}
                />
            )
        }
    </div>
        );
}
export default RikiAndMartin;