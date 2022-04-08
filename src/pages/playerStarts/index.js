import usePlayerStats from 'hooks/usePlayerStats';
import Spinner from 'components/spinner/spinner';
import './playerStats.css'

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

    /* const downloadImage = (blob, fileName) => {

        const fakeLink = window.document.createElement("a");
        fakeLink.style ="display:none;"
        fakeLink.download = fileName+'.png';

        fakeLink.href = blob;

        document.body.appendChild(fakeLink);
        fakeLink.click();

        document.body.removeChild(fakeLink);

        fakeLink.remove();
    } */

    return <>

        <p className="text-center mt-4 stats-title">Fortnite Stats</p>

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
    </>
}

export default PlayerStats;