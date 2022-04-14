import {API_KEY} from 'config/config'

export const getCurrentMapWithPOINames = () => {

    return fetch('https://media.fortniteapi.io/images/map.png?showPOI=true', {
        type: 'get',
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(({url}) => {return url});
}