function Character ({character}){

    return(
        <div>
            <h2>{character.id} -- {character.name}</h2>
            <p>{character.gender}</p>


        </div>
    )
}
export default Character;