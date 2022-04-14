import './home.css';
import {useFortniteNews} from 'hooks/useFortniteNews';
import {useFtCrew} from 'hooks/useFtCrew';
import { useCurrentMap } from 'hooks/useCurrentMap';

function Home() {

    const {ftNews} = useFortniteNews();
    const {ftCrew, ftCrewRewards} = useFtCrew();
    const {currentMap} = useCurrentMap();
    
    return <>

        <div id="carouselExampleCaptions" className="carousel slide mt-4" data-bs-ride="carousel">
            <div className="carousel-inner">

                    {
                        ftNews?.length > 0 ?
                            ftNews.slice(0,7).map((ftnew, idx) => {
                                return <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={ftnew.id}>

                                    <img src={ftnew.image} className="d-block" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{ftnew.title}</h5>
                                        <p>{ftnew.body}</p>
                                    </div>
                                </div>
                            })
                        : 
                            <h3 className='txt-center'>Cargando noticias...</h3>
                    }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        
        <div className='row'>
            <p className='ft-crew-title'>Club fortnite</p> 

            <div className='col-md-7 col-sm-12'>
                <div className="card">
                    <img src={ftCrew?.images?.apiRender} className="card-img-top" alt="..." />
                </div>
            </div>
            <div className='col-md-5 col-sm-12'>
                
                <div className='crew-rewards-content'>
                    {
                        ftCrewRewards?.map((reward) => {
                            return <div className="card reward-card-img text-white" key={reward?.item?.id}>
                                <img
                                    src={reward?.item?.images?.background}
                                    className="card-img crew-reward-img"
                                    alt="..." />

                                <div className="card-img-overlay">
                                    <h6 className="card-title">{reward?.item?.name}</h6>
                                    <p className="card-text">{reward?.item?.description}</p>
                                </div>
                            </div>
                        })
                    }
                   
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-md-12 col-sm-12'>
                <p className='current-map-section-title'>Mapa del Capitulo 3 Temporada 2</p>
                <img src={currentMap} alt="current Map" className="curent-map"/>
            </div>
        </div>
    </>
}

export default Home;