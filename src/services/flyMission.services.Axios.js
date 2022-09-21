import axios from "axios";

import {baseURL} from "../configs";

const axiosService=axios.create({baseURL});

export {axiosService};


// import axios from "axios";
//
// let axiosInstance=axios.create({
//     baseURL:'https://api.spacexdata.com/v3/launches'
// });
//
// export function getLaunchesAxios(){
//     return axiosInstance();
// }