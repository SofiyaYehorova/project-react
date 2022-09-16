import {useState} from "react";
import Character from "./Character";

function RikiAndMartin(){

    const [rikiAndMartin, setRikiAndMartin] = useState([]);

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value => value.json())
        .then(value => {
            setRikiAndMartin(value.results.splice(0,6));
        });

    return(
    <div>
        {
            rikiAndMartin.map(person =>
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
