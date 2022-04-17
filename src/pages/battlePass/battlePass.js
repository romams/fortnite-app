import useBattlePass from 'hooks/useBattlePass';
import './battlePass.css'

function BattlePass(){

    const { battlePassData, battlePassRewards} = useBattlePass();

    return <>
        <p className='text-center section-title'>
            {battlePassData.displayInfo?.battlepassName}
        </p>

        <p className='text-center battlepass-chapterseason'>
            {battlePassData.displayInfo?.chapterSeason}
        </p>

        <div className="main">
            <h2 className='section-title rewards-title mt-4'>Recompensas del pase de batalla</h2>
            <hr />
            {
                Object.keys(battlePassRewards).map((item, idx) => {
                    
                    return <div key={idx} className="battlepass-page-content mt-4">
                        <h4 className='rewards-page-number'>Page: {item}</h4>
                        
                        <div className='row rewards-content'>
                            {
                                battlePassRewards[item].map((reward) => 
                                    
                                        <img 
                                            src={reward.item.images?.full_background} 
                                            alt={reward.item.name} 
                                            className="battlepass-reward-icon"
                                        />
                                )
                            }
                        </div>
                    </div>
                })
            }
        </div>
    </>
}

export default BattlePass;