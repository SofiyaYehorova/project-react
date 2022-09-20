const UserDetails=({user})=>{

    return(
        <div>
            <h2>{user.name}</h2>
            <p>{user.address.city}</p>
        </div>
    )
}
export {UserDetails};