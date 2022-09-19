import User from "./User";
import React, {useEffect, useState} from "react"


export default function Users(){
    let [users, setUsers]=useState([]);
    let [user, setUser]=useState(null);

    const lift=(obj)=>{
        setUser(obj)
    }

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(value=>value.json())
        .then(value=>{
        setUsers(value);
    });
}, []);


return (<div>
        <hr/>
        {<p className="first">{user?.username}</p>}
        <hr/>

    {users.map((user, index)=>(<User
            item={user}
            key={index}
            lift={lift}
        />
        ))}
</div>
);
};





