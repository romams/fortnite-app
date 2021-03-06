import './itemsStore.css';
import {useDailyShop} from 'hooks/useDailyShop';
import {showImg} from 'utils/viewImg';

function ItemsStore() {

    const {itemsShop} = useDailyShop();
    
    return <>
        <p className="text-center section-title">TIENDA FORTNITE</p>

        <div className="main container">

            {
                Object.keys(itemsShop).map((e,idx) => {

                    return <div key={idx} className="section-container">

                        <p className='section-title'>{e}</p>

                        {
                            itemsShop[e].map(imgURL => <img src={imgURL} alt={e} className='itemShop'/>)
                        }
                    </div>
                })
            }
        </div>
    </>
}


export default ItemsStore;