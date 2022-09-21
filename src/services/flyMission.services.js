import {axiosService} from "./flyMission.services.Axios";
import {urls} from "../configs";

const flyMissionServices={
    getAll:()=>axiosService.get(urls.fly)
}

export {flyMissionServices};


// let _url = 'https://api.spacexdata.com/v3/launches/';
//
// export function getLaunchers(){
//     return fetch(_url)
//         .then(value=>value.json())
// }