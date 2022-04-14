import { useEffect, useState } from "react"
import { getCurrentMapWithPOINames } from "services/currentMapService";


export const useCurrentMap = () => {

    const [currentMap, setCurrentMap] = useState();

    useEffect(() => {

        getCurrentMapWithPOINames()
        .then(cMap => setCurrentMap(cMap));
    }, []);

    return {currentMap}
}