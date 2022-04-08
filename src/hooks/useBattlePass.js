import { useEffect, useState } from 'react';
import { getBattlePassRewards } from 'services/battlePassService';

function useBattlePass(){
    const [battlePassData, setBattlePassData] = useState({});
    const [battlePassRewards, setBattlePassRewards] = useState([]);

    const test = async(awardsArray) => {
        let rewardsGroupByPage = {};

        awardsArray.map(item => {
            let page = item.page;
            
            if(!rewardsGroupByPage[page]){
                rewardsGroupByPage[page] = []
            }
    
            rewardsGroupByPage[page].push(item);
        })
    
        setBattlePassRewards(rewardsGroupByPage);

    }

    useEffect(() => {
            
        getBattlePassRewards()
        .then(({displayInfo, videos, rewards}) => {
            
            setBattlePassData({displayInfo, videos})
            
            test(rewards)
        })
            
    }, [])

    return {battlePassData, battlePassRewards}
}

export default useBattlePass;