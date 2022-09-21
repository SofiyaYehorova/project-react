import {useEffect, useState} from "react";
import {flyMissionServices} from "../../services";
import {Plane} from "../plane/Plane";

const Planes=()=>{

    const [planes, setPlanes] = useState([]);

    useEffect(()=>{
        flyMissionServices.getAll().then(value=>setPlanes(value.data.filter(value=>value.launch_year !=='2020')))
    },[])

    return (
        <div>
            {
               planes.map(plane=>
                   <Plane
                   key={plane.flight_number}
                   plane={plane}/>)
            }
        </div>
    )
}
export {Planes};



// import {useEffect, useState} from "react";
// import {getLaunches} from "../../services/flyMission.services"
// import {Launch} from "./Launch";
// import {getLaunchesAxios} from "../../services/flyMission.services.Axios"
//
//
// export function Launches() {
//     let [launches, setLaunches] = useState([]);
//
//     useEffect(() => {
//         getLaunchesAxios().then(value => {
//             setLaunches(value.data)
//         });
//     }, []);
//
//     return (
//         <div>
//             {launches.length?launches.filter(value => value.launch_year !=='2020')
//                 .map(value=>
//                     <Launch
//                         launch={value}
//                         key={value.flight_number}/>):<div>wait please</div>}                }
//         </div>
//     );
//
// }