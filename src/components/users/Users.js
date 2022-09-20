import {useEffect, useState} from "react";

import {User} from "../user/User";
import {userService} from "../../services";
import {UserDetails} from "../details/Details";

const Users=()=>{

   const [users, setUsers] = useState([]);
   const[user, setUser]=useState(null);

   const showInfo=(obj)=>{
       setUser(obj)
   }

   useEffect(()=>{
       userService.getAll().then(value=>setUsers(value.data))
   },[])

    return(
        <div>
            {
                users.map(user=>
                    <User
                    key={user.id}
                    user={user}
                    showInfo={showInfo}
                    />)
            }
            {
                user && <UserDetails key={user.id} user={user}/>
            }
        </div>
    )
}
export {Users};



// import User from "../user/User";
// import React, {useEffect, useState} from "react"
//
//
// export default function Users(){
//     let [users, setUsers]=useState([]);
//     let [user, setUser]=useState(null);
//
//     const lift=(obj)=>{
//         setUser(obj)
//     }
//
// useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//         .then(value=>value.json())
//         .then(value=>{
//         setUsers(value);
//     });
// }, []);
//
//
// return (<div>
//         <hr/>
//         {<p className="first">{user?.username}</p>}
//         <hr/>
//
//     {users.map((user, index)=>(<User
//             item={user}
//             key={index}
//             lift={lift}
//         />
//         ))}
// </div>
// );
// };
//
//



