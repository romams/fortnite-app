import useItemSelected from 'hooks/useItemSelected';
import epic from 'img/rarity/epic.jpg';
import legendary from 'img/rarity/legendary.jpg';
import rare from 'img/rarity/rare.jpg';
import uncommon from 'img/rarity/uncommon.jpg';
import { useEffect } from 'react';
import './cosmetic.css'


const Cosmetic = ({ cosmetics }) => {

    const { onSelectItem } = useItemSelected();
    const st ={epic, legendary, rare, uncommon}
    
    useEffect(() => {

        const divimg = document.querySelectorAll('.item-icon-img');

        for(let i =0; i <= divimg.length-1; i++ ){
            divimg[i].style.backgroundImage = `url(${st[divimg[i]?.id]})`
        }
    }, [cosmetics])

    return <>

        {
            cosmetics?.length > 0 && (
                cosmetics?.map(item => <div className='' key={item.id}>
                    <div className='item-icon-img plus'id={item?.rarity?.value}>
                        <img
                            src={item?.images?.icon}
                            className="img-item"
                            onClick={(() => onSelectItem(item))}
                            alt=""
                        />
                    </div>
                </div>
                )
            )
        }
    </>


}

export default Cosmetic;