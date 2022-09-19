import {useEffect, useState} from "react";
import {getLaunches} from "../../services/flyMission.services"
import {Launch} from "./Launch";
import {getLaunchesAxios} from "../../services/flyMission.services.Axios"


export function Launches() {
    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunchesAxios().then(value => {
            setLaunches(value.data)
        });
    }, []);

    return (
        <div>
            {launches.length?launches.filter(value => value.launch_year !=='2020')
                .map(value=>
                    <Launch
                        launch={value}
                        key={value.flight_number}/>):<div>wait please</div>}                }
        </div>
    );

}