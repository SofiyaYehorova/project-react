export default function User(props){
    let {item:user, lift}=props;

    return (<div className="box">
        <div className="conteiner">
            <h2>{user.id} -- {user.name}</h2>
            <p>{user.address.city} <br/> {user.email}</p>

            <button onClick={()=>{
                lift(user);
            }}>More info</button>
        </div>
        </div>);

}