
const CurrentMap = ({currentMap}) => {

    return <div className='row'>
        <div className='col-md-12 col-sm-12'>
            <p className='section-title current-map-title'>Mapa del Capitulo 3 Temporada 2</p>
            <img src={currentMap} alt="current Map" className="curent-map" />
        </div>
    </div>
}

export default CurrentMap;