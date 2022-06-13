import { useDailyShop } from "hooks/useDailyShop";
import { Link } from "wouter";


const ItemShop = () => {
    const {itemsShop} = useDailyShop();

    return <div>
      <span className="section-title">Tienda de objectos hoy</span>
        {
            Object.keys(itemsShop).slice(0,2).map((section, idx)=> {
                return <div key={idx}>

                    <p className="section-title shop-title-section">{section}</p>

                    <div className="itemshop-section">
                        {
                            itemsShop[section]
                                .slice(0,6)
                                .map((item, idx) => <img src={item} alt="..." key={idx}/>)
                        }
                    </div>
                </div>
            })
        }

        <div>
            <Link href={`${process.env.PUBLIC_URL}/shop`} className="btn ft-btn-style">Ver tienda</Link>
        </div>
    </div>
}

export default ItemShop;
