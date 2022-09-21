import axios from "axios";

const axiosInstance= axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users',
    headers:{'Content-type': 'application/json; charset=UTF-8'},


});

const saveUser=(data)=>axiosInstance.post('', {data});


export {saveUser};
