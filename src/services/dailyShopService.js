import {API_KEY} from 'config/config';

export const getDailyShop = () => {

    return fetch('https://fortniteapi.io/v2/shop?lang=es', {
        type: 'get',
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(response => response.json())
}