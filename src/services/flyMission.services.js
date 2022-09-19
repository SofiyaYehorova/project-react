let _url = 'https://api.spacexdata.com/v3/launches/';

export function getLaunchers(){
    return fetch(_url)
        .then(value=>value.json())
}