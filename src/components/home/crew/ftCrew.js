
const FtCrew = ({ftCrew, ftCrewRewards}) => {

    return <div className='row'>
        <p className='section-title'>Club fortnite</p>

        <div className='col-lg-7 col-md-12'>
            <div className="card">
                <img src={ftCrew?.images?.apiRender} className="card-img-top" alt="..." />
            </div>
        </div>
        <div className='col-lg-5 col-md-12'>

            <div className='crew-rewards-content'>
                {
                    ftCrewRewards?.map((reward) => {
                        return <div className="card reward-card-img text-white" key={reward?.item?.id}>
                            <img
                                src={reward?.item?.images?.background}
                                className="card-img crew-reward-img"
                                alt="..." />

                            <div className="card-img-overlay">
                                <h6 className="card-title">{reward?.item?.name}</h6>
                                <p className="card-text">{reward?.item?.description}</p>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    </div>

}

export default FtCrew;