import './home.css';
import {useFtCrew} from 'hooks/useFtCrew';
import { useCurrentMap } from 'hooks/useCurrentMap';
import FtCrew from 'components/home/crew/ftCrew';
import CurrentMap from 'components/home/currentMap/currentMap';
import NewsSection from 'components/news/newsSection';
import ItemShop from 'components/home/itemShop/itemShop';

function Home() {

    return <>
        <img
            src='https://pbs.twimg.com/media/FUe1hqiWYAEuTQF?format=jpg&name=large'
            className='header-img'
            alt='season-bg' />

        <div className='container home-main-content'>

            <NewsSection />

            <ItemShop />
        </div>

    </>
}

export default Home;
