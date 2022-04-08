import { API_KEY } from "config/config";


export const getBattlePassRewards = () => {

    return fetch(`https://fortniteapi.io/v2/battlepass?lang=es&season=current`, {
        type: 'get',
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(response => response.json());

}