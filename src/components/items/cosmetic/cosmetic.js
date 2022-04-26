import './cosmetic.css'


const Cosmetic = ({cosmetics}) => {

    return <>
        {   cosmetics?.length > 0 && (
            cosmetics?.map(item => <div className='item-icon' key={item.id}>
                
                <div className='item-icon-img plus'>
                    <img src={item?.images?.icon} alt="" className="img-item"/>
                </div>
                {/* <div className='item-icon-name'>
                    <span>{item?.name}</span>
                </div> */}
            </div>
                
             )

            )
        }
    </>

    
}

export default Cosmetic;