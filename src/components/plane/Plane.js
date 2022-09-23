const Plane=({plane})=>{

    return (
        <div className="info">
            <h2>{plane.flight_number} -- {plane.mission_name}</h2>
            <img src={plane.links.mission_patch_small} alt={plane.mission_name}/>
        </div>
    )
}
export {Plane};


// export function Launch(props){
//     let {launch}=props;
//
//     return(
//         <div>
//             <h2>Mission name - {launch.mission_name}</h2>
//             <p>Launch year - {launch.launch.year} <br/>
//             mission patch - <a href={launch.links.mission_patch_small}>{launch.links.mission_patch_small}</a></p>
//         </div>
//
//     )
// }