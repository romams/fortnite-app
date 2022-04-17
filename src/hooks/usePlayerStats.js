import { useState } from "react";
import { getGloblalPlayerStats } from "services/playerStatsService";
import {loadCanvas} from 'utils/canvaStats';

function usePlayerStats() {

    const [ playerStats, setPlayerStats] = useState({})
    const [playerUsername, setPlayerUsername] = useState({});

    const [showSpinner, setShowSppiner] = useState(Boolean);

    const onInputChange = (e) => {

        const {name, value} = e.target;
        
        setPlayerUsername(
            {[name]: value}
        )
            
    }

    const onSearchPlayerStats = (e) => {
        e.preventDefault();

        setShowSppiner(true);

        if(playerUsername.inputSearch!==''){
            
            if(window.navigator.onLine){
                
                try {
                    getGloblalPlayerStats(playerUsername.inputSearch)
                        .then(stats => {
                            setPlayerStats(stats.global_stats);
                            
                            setShowSppiner(false)
                            
                            loadCanvas(stats);
    
                        }).catch(error => {
    
                            console.error('Someting went wrong!')
                            setShowSppiner(false);
                        });
        
                } catch (error) {
        
                    console.error(error);
                }
            }else{

                window.alert('Estas fuera de linea');
            }
            
            
        }else{

            console.log('Por favor escribe algo!');
        }

    }

    return {onSearchPlayerStats, onInputChange, playerStats, showSpinner}
}

export default usePlayerStats;