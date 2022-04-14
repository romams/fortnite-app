import './home.css';
import {useFortniteNews} from 'hooks/useFortniteNews';
import {useFtCrew} from 'hooks/useFtCrew';
import { useCurrentMap } from 'hooks/useCurrentMap';
import Carousel from 'components/home/carousel/carousel';
import FtCrew from 'components/home/crew/ftCrew';
import CurrentMap from 'components/home/currentMap/currentMap';

function Home() {

    const {ftNews} = useFortniteNews();
    const {ftCrew, ftCrewRewards} = useFtCrew();
    const {currentMap} = useCurrentMap();
    
    return <>

        <Carousel ftNews={ftNews} />
        
        <FtCrew ftCrew={ftCrew} ftCrewRewards={ftCrewRewards}/>

        <CurrentMap currentMap={currentMap} />
        
    </>
}

export default Home;