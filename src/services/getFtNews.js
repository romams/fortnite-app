import { API_KEY } from "config/config";

export const getFortniteNews = () => {

    return fetch(`https://fortniteapi.io/v1/news?lang=es&type=br`, {
        type: 'get',
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(response => response.json());

}