export default function User(props){
    let {item:user, lift}=props;

    return (<div className="box">
        <div className="conteiner">
            <h2 className="second">{user.id} -- {user.name}</h2>
            <p className="third">{user.address.city} <br/> {user.email}</p>

            <button onClick={()=>{
                lift(user);
            }}>More info</button>
        </div>
        </div>);

}