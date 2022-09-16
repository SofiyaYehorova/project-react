function Character ({person}){

    return(
        <div>
            <h2>{person.id} -- {person.name}</h2>
            <p>{person.gender}</p>

        </div>
    )
}
export default Character;