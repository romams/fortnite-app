import {API_KEY} from 'config/config'

export const getCurrentCrew = () => {

    return fetch('https://fortniteapi.io/v2/crew?lang=es', {
        type: 'get',
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(response => response.json());
}