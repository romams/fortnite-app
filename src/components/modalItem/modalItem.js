import useItemSelected from 'hooks/useItemSelected';
import './modalItem.css'

const ModalItem = () => {

    const {currentItem, cosmeticSet} = useItemSelected();

    const closeModalHandle = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    window.addEventListener('click', function (event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })

    const changeCurrentItemInfo = (currentItemSelectedInfo) => {

        let imgTag = document.querySelector('.currentItemSelected');
        let itemName = document.querySelector('.cItem-name');
        
        itemName.textContent = currentItemSelectedInfo?.name;
        imgTag.src = currentItemSelectedInfo?.images?.featured || currentItemSelectedInfo?.images?.featured;
        
    }
    
    return <>

        <div id="myModal" className="modalItem">
            <div className="modal-content">
                <span className="close" onClick={(() => closeModalHandle())}>&times;</span>

                <div className="row">
                    <div className="col-md-7">
                        <img 
                            className='currentItemSelected' 
                            src={currentItem?.images?.featured || currentItem?.images?.icon} 
                            style={{width: '70%', display: 'block', margin: '0 auto'}} 
                        />
                    </div>
                    <div className='col-md-5'>

                        <div className='currentItem-info'>
                            <span className='cItem-name'>{currentItem?.name}</span>

                            <div className='cItem-type'>
                                <span className={currentItem?.rarity?.value}>{currentItem?.rarity?.displayValue} </span>
                                {currentItem?.type?.displayValue}
                            </div>

                            <div className='cItem-details'>
                                <span className='cItem-details-span'>Introducido en: </span> Capítulo {currentItem?.introduction?.chapter}, Temporada {currentItem?.introduction?.season}
                                <br />
                                <span className='cItem-details-span'>Parte del conjunto: </span> <a href='#'>{currentItem?.set?.value}</a>
                            </div>
                        </div>

                        <div className='currentItemSet'>
                            {
                                cosmeticSet?.map((itemSet) => <img 
                                    key={itemSet?.id}
                                    src={itemSet?.images?.icon}
                                    onClick={(() => changeCurrentItemInfo(itemSet))}
                                />)
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
}

export default ModalItem;