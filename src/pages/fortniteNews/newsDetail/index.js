import './newsDetail.css';
import {useRoute} from 'wouter';
import {useEffect, useState} from 'react';
import {useFortniteNews} from 'hooks/useFortniteNews';

function NewsDetail() {
    const [match, params] = useRoute(`${process.env.PUBLIC_URL}/news/detail/:id`);
    const [currentNewsItem, setCurrentNewsItem] = useState(null);
    const {ftNews} = useFortniteNews();

    useEffect(() => {
      const news = ftNews?.filter((item) => item.id === params?.id)
      setCurrentNewsItem(news);
    }, [params?.id])

    return <>
      {
        currentNewsItem !== null
        && currentNewsItem?.map((n) => {
          return <>
            <img src={n.image} className="news-detail-img-header" alt=""/>

            <div className="container">
              <div className="col-md-8 col-lg-8 col-12 m-auto mt-4">
                <span className="currentNewsItem-title">{n.title}</span>
                <img src={n.image} alt="" style={{width: '100%'}}/>
                <p className="currentNewsItem-text">
                  {n.body}
                </p>
              </div>
            </div>
          </>
        })

      }
    </>
}

export default NewsDetail;
