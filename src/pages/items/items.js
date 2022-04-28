import ItemsContent from "components/items/itemsContent/itemsContent";
import useItemSelected from "hooks/useItemSelected";
import { useState } from "react";


function Items(){
    const [cosmeticType, setCosmeticType] = useState('outfit');
    const cosmeticsType = [
        'Outfit', 'Emote', 'Backpack', 
        'Pickaxe', 'Glider', 'Contrail', 
        'Wrap', 'Spray', 'Emoji', 'Toy', 'Loadingscreen', 'Music'];
        

    const printType = (type) => {

        setCosmeticType(type.toLowerCase())
    }

    return <>
        <ul className="nav nav-tabs mb-3 mt-4 nav-tab-cosmetics" id="pills-tab" role="tablist">
            {
                cosmeticsType.map((type,idx) => {
                    return <li className="nav-item" role="presentation" key={idx}>
                        <button 
                            className={`nav-link ${idx === 0 ? 'active' : ''}`} 
                            id={`pills-${type}-tab`} 
                            data-bs-toggle="pill" 
                            data-bs-target={`#pills-${type}`} 
                            type="button" role="tab" 
                            aria-controls={`pills-${type}`} 
                            aria-selected={idx === 0 ? 'true' : 'false'}
                            onClick={(() => printType(type))}>{type}</button>
                    </li>
                })
            }
        </ul>

        <nav class="navbar navbar-light nav-cosmetics mt-4 mb-4" style={{backgroundColor: '#e3f2fd'}}>
            <div className="container-fluid">
                <a className="navbar-brand navbar-title" href="#">{cosmeticType}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavCosmetics" aria-controls="navbarNavCosmetics" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavCosmetics">
                    <div className="navbar-nav navbar-nav-scroll" style={{ bsScrollHeight: '100px' }}>

                        {
                            cosmeticsType.map((type, idx) => {
                                return <li className="nav-item" role="presentation" key={idx}>
                                    <span
                                        className="nav-link"
                                        onClick={(() => printType(type))}>{type}</span>
                                </li>
                            })
                        }

                    </div>
                </div>

            </div>
        </nav>

        <div className="tab-content" id="pills-tabContent">
            <ItemsContent type={cosmeticType}/>
        </div>
    </>
}

export default Items;