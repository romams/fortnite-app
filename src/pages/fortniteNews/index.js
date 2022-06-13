import './ftNews.css'
import {useFortniteNews} from 'hooks/useFortniteNews';
import {Link} from 'wouter';

function FortniteNews() {

    const {ftNews} = useFortniteNews();

    return <div className='container'>
        <p className="text-center section-title mt-4 mb-4">Fortnite News</p>

        <div className="row justify-content-md-center">

            {
                ftNews.map((item) => {
                    return <div className="br-news-container col-md-4 col-sm-6" key={item.id}>
                        <div className="card mb-3">
                            {
                                item?.video !== null ? (
                                    <video src={item?.video} controls poster={item.image}>
                                        Your browser does not support the video tag.
                                    </video>

                                ) : (

                                    <img src={item.image} className="card-img-top" alt="..." />
                                )
                            }
                            <div className="card-body">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/news/detail/${item?.id}`}
                                  className="card-title card-link">{item?.title}</Link>
                                <p className="card-text truncate-text">{item?.body}</p>
                                <p className="card-text"><small className="text-muted">{item.date}</small></p>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    </div>
}

export default FortniteNews;
