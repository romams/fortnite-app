import './home.css';
import {useFtCrew} from 'hooks/useFtCrew';
import { useCurrentMap } from 'hooks/useCurrentMap';
import FtCrew from 'components/home/crew/ftCrew';
import CurrentMap from 'components/home/currentMap/currentMap';
import NewsSection from 'components/news/newsSection';
import ItemShop from 'components/home/itemShop/itemShop';

function Home() {
    const {ftCrew, ftCrewRewards} = useFtCrew();
    const {currentMap} = useCurrentMap();
    
    return <>
        <img 
            src='https://cdn2.unrealengine.com/fortnite-chapter-3-season-2-1900x600-c561fe397af1.jpg'
            className='header-img'
            alt='season-bg' />

        <div className='container'>
            <NewsSection />
            
            <FtCrew ftCrew={ftCrew} ftCrewRewards={ftCrewRewards}/>

            <div className='row'>
                <div className='col-lg-8 col-md-12'>
                    <CurrentMap currentMap={currentMap} /> 
                </div>
                <div className='col-lg-4 col-md-12'>
                    <ItemShop />
                </div>
            </div>
        </div>
        
    </>
}

export default Home;