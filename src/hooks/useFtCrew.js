import { useEffect, useState } from "react"
import { getCurrentCrew } from "services/ftCrewService";

export const useFtCrew = () => {

    const [ftCrew, setFtCrew] = useState({});
    const [ftCrewRewards, setFtCrewRewards] = useState([]);

 
    useEffect(() => {
        
        getCurrentCrew()
        .then(({currentCrew}) => {
            setFtCrew({
                "descriptions": currentCrew.descriptions,
                "images": currentCrew.images
            })

            setFtCrewRewards(currentCrew.rewards)
        })
    }, []);

    return {ftCrew, ftCrewRewards};
}