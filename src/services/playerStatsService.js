import { API_KEY } from "config/config";

export const getGloblalPlayerStats = async(playerName) => {

    const {account_id} = await searchAccountId(playerName);

    return fetch(`https://fortniteapi.io/v1/stats?account=${account_id}`, {
        type: 'get',
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(response => response.json())
}

export const searchAccountId = (playerName) => {

    return fetch(`https://fortniteapi.io/v1/lookup?username=${playerName}`, {
        type: 'get',
        headers: {
            'Authorization': API_KEY
        }
    })
    .then(response => response.json());

}
