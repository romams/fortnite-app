import './newsSection.css'
import { useFortniteNews } from "hooks/useFortniteNews";

const NewsSection = () => {

    const {ftNews} = useFortniteNews();

    return <>
        <p className='section-title'>Noticias Fornite</p>
        
        <div className='news-section-row'>
            {
                ftNews?.length > 0 ?
                    ftNews.slice(0,4).map((sn, idx) => {
                        return <div className="card news-card col-sm-12" key={idx}>
                            <img src={sn.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">{sn.title}</h5>
                            <p className="card-text">{sn.body}</p>
                            </div>
                        </div>
                    })
                : <>
                    <p>Obteniendo noticias...</p>
                </>
            }
        </div>
    </>
}

export default NewsSection;