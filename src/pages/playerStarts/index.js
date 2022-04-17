import './playerStats.css'
import usePlayerStats from 'hooks/usePlayerStats';
import Spinner from 'components/spinner/spinner';
import { FcInfo} from 'react-icons/fc';
import NewsSection from 'components/news/newsSection';
import CardStats from 'components/stast/card/cardStats';


function PlayerStats() {

    const {onSearchPlayerStats, onInputChange, playerStats, showSpinner}= usePlayerStats();

    const converCanvasToImg = (playername) => {
        var canvas = document.getElementById("mi-canvas");
        
        let src = canvas.toDataURL("image/png");

        var link = document.createElement('a');
        link.download = `${playername}-stats.png`;
        link.href = src;
        
        link.click();
    }

    return <>

        <p className="text-center mt-4 section-title">Fortnite Stats</p>

        <div className="row justify-content-md-center">
            <form className="searchForm mt-1 col-md-6 col-sm-12" onSubmit={onSearchPlayerStats}>
                <div className="form-group searchDiv">
                    <input
                        className="form-control input-search"
                        name="inputSearch"
                        placeholder="Epic ID"
                        onChange={onInputChange} 
                        required/>
                    <button type="submit" className="btn btn-primary">Buscar</button>
                </div>
            </form>

            <p className='text-center errorMessage mt-3'></p>

        </div>

        {
             showSpinner ? <Spinner /> : <>
             
                <div className='row player-stats-content'>
                    <button className='btn btn-primary mb-4 btn-download' onClick={() => converCanvasToImg(playerStats.name)}>Download</button>

                    <canvas
                        style={{ display: "none", width: "100%", borderRadius: "8px" }}
                        id="mi-canvas"
                        width="1920px"
                        height="920px"
                        className='col-md-12 col-sm-12 mb-4'
                    >
                        Tu navegador no soporta canvas.
                    </canvas>
                </div>
             
             </>
        }

        <p className='complete-stats'>Más información</p>
        
        <div className='card-stats-row'>
            {
                playerStats !== {} && (

                    Object.keys(playerStats).map((mode) => {
    
                        return <CardStats gameMode={mode} stats={playerStats[mode]} key={mode}/>
    
                    })
                )
            }
        </div>

        <div className='info-stats mt-4'>

            <div className='some-info'>
                <FcInfo className="info-icon"/>
                <p className='text-stats-info'>
                    Introduce tu nombre de usuario de EpicGames para buscar. 
                    Se muestran las estadisticas generales en modo solitario.
                    Estamos trabajando para mostrarte tus estadisticas en todos los modos ;)
                </p>
            </div>

        </div>

        <NewsSection />
    </>
}

export default PlayerStats;