import { useEffect, useContext} from 'react';
import { getFortniteNews } from 'services/getFtNews';
import ftContext from 'context/newContext';

export const useFortniteNews = () => {

    const {ftNews, setFtNews} = useContext(ftContext);

    useEffect(() => {

        getFortniteNews().then(({ news }) => {
            news.sort(function(a,b){
                if(a.date < b.date){
                    return 1;
                }

                if(a.date > b.date){
                    return -1;
                }

                return 0;
            })

            setFtNews(news)
        })

    }, [])


    return {ftNews};
}