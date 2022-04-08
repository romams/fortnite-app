import { useEffect, useState } from "react";
import {getDailyShop} from 'services/dailyShopService';


export function useDailyShop(){

    const [itemsShop, setItemsShop] = useState({});
    
        const groupShopItemsBySection = (data) => {
            
            var objectWithGroupdBySection = {}
            
            for(var key in data.shop){
                var section = data.shop[key].section.name || data.shop[key].section.id;
                
                if(!objectWithGroupdBySection[section]){
                    objectWithGroupdBySection[section] = []
                }
                
                objectWithGroupdBySection[section].push(data.shop[key])
            }
        
            return objectWithGroupdBySection    
        }
    
        useEffect(() => {
    
            getDailyShop().then(data => {
    
                const items = groupShopItemsBySection(data)
    
                let shopObject = {}
            
                for(var sect in items){
                    for(var singleSection in items[sect]){
                        
                        if(!shopObject[sect]){
                            shopObject[sect] = [];
                        }
                        shopObject[sect].push(items[sect][singleSection].displayAssets[0].full_background);
                    }
                }
    
                setItemsShop(shopObject);
            });
            
        }, [])
    
        return {itemsShop}
}
