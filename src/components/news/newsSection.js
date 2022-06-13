import './newsSection.css'
import { useFortniteNews } from "hooks/useFortniteNews";

const NewsSection = () => {

    const {ftNews} = useFortniteNews();

    return <div>
        <span className="section-title">Noticias</span>

        <div className='news-section-row'>
            {
                ftNews?.length > 0 ?
                    ftNews.slice(0,8).map((sn) => {
                        return <div className="card news-card col-sm-12" key={sn.id}>
                            <img src={sn.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">{sn.title}</h5>
                            <p className="card-text truncate-text">{sn.body}</p>
                            </div>
                        </div>
                    })
                : <>
                    <p>Obteniendo noticias...</p>
                </>
            }
        </div>
        <button className="btn ft-btn-style">Ver más</button>
    </div>
}

export default NewsSection;
