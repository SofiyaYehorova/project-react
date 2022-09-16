function Character (props){

    let {person}=props;
    return(
        <div>
            <h2>{person.id} -- {person.name}</h2>
            <p>{person.gender}</p>


        </div>
    )
}
export default Character;