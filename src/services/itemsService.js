import {FORTNITEAPIKEY} from 'config/config'

export const getItems = (type) => {

    return fetch(`https://fortnite-api.com/v2/cosmetics/br/search/all?type=${type}&language=es`, {
        type: 'get',
        headers: {
            'Authorization': FORTNITEAPIKEY
        }
    })
    .then(response => response.json());
}