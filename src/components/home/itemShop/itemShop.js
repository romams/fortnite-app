import { useDailyShop } from "hooks/useDailyShop";
import { Link } from "wouter";


const ItemShop = () => {
    const {itemsShop} = useDailyShop();

    return <div>
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

        <div className="view-items-shop">
            <Link href={`${process.env.PUBLIC_URL}/shop`}>Ver tienda completa</Link>
        </div>
    </div>
}

export default ItemShop;
