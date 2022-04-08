import useBattlePass from 'hooks/useBattlePass';
import './battlePass.css'

function BattlePass(){

    const { battlePassData, battlePassRewards} = useBattlePass();

    const cardSizes = ['small', 'medium', 'large'];

    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    return <>
        <p className='text-center battlepass-title'>
            {battlePassData.displayInfo?.battlepassName}
        </p>

        <p className='text-center battlepass-chapterseason'>
            {battlePassData.displayInfo?.chapterSeason}
        </p>

        <div className='row'>
            {
                battlePassData?.videos?.length > 0 && (
                    battlePassData?.videos.map(video =>  
                        <video key={video?.url}
                            src={video?.url}
                            className='col-md-6 col-sm-12'
                            controls>
                            
                            Your browser does not support the video tag.
            
                        </video>
                    )
                )
            }
        </div>

        <div className="main">
            <h2 className='rewards-title mt-4'>Recompensas del pase de batalla</h2>
            <hr />
            {
                Object.keys(battlePassRewards).map((item, idx) => {
                    
                    return <div key={idx} className="battlepass-page-content mt-4">
                        <h4 className='rewards-page-number'>Page: {item}</h4>
                        
                        <div className='row rewards-content'>
                            {
                                battlePassRewards[item].map((reward) => 
                                    <div className='battlepass-item-card'>
                                        <img 
                                            src={reward.item.images?.full_background} 
                                            alt={reward.item.name} 
                                            className="battlepass-reward-icon"
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                })
            }
        </div>
    </>
}


function CardRewards(props) {
    return (
        <div style={{ 
            ...styles[props.size]}}>

            <img
                src={props.reward.item.images?.full_background}
                alt={props.reward.item.name}
                className="battlepass-reward-icon"
            />

        </div>
    )
}

const styles = {
    
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}


export default BattlePass;