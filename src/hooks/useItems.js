import { useEffect, useState } from "react"
import { getItems } from "services/itemsService"

export const useItems = (type) => {

    const [cosmetics, setCosmetics] = useState([]);
    
    if(type === '' || undefined || null) type = 'outfit';
    
    useEffect(() => {

            getItems(type.toLowerCase()).then(({data}) => sortItemsByAddedDate(data))
    },[type]);


    const sortItemsByAddedDate = (items) =>{
        items.sort(function(a,b){
            if(a.added < b.added){
                return 1;
            }

            if(a.added > b.added){
                return -1;
            }

            return 0;
        })

        setCosmetics(items)
    }


    return {cosmetics}
}