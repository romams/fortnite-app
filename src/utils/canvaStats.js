import bgTemplate from 'img/bg-20.jpg';
import characterimg from 'img/character.png'
import { separator } from './minutesToDays';

function cargarContextoCanvas(idCanvas){
    var elemento = document.getElementById(idCanvas);


    if(elemento && elemento.getContext){
        var contexto = elemento.getContext('2d');

        if(contexto){
            return contexto
        }
    }

    return false;
}

export const loadCanvas = (playerStats) => {
    
    let errorh3 = document.querySelector('.errorMessage');
    let canvasel = document.getElementById('mi-canvas');
    let btnDownload = document.querySelector('.btn-download');
    let statsLabel = document.querySelector('.complete-stats');

    if(playerStats.result === true){
        
        errorh3.textContent = ''

        var ctx = cargarContextoCanvas('mi-canvas');
        
        const {global_stats} = playerStats;
        const {solo} = global_stats;
        
        const wins = separator(solo?.placetop1);
        const winrate = solo?.winrate;
        const matches = separator(solo?.matchesplayed);
        const kd = solo?.kd;
        const killsmatch = (solo?.kills / solo?.matchesplayed).toString();
        const kills = separator(solo?.kills);
    
        if(ctx){
            var bg = new Image()
            var character = new Image();
    
            bg.crossOrigin = 'anonymous';
            bg.src = bgTemplate;
            
            character.crossOrigin = 'anonymous';
            character.src = characterimg;
    
            bg.onload = function(){
                ctx.drawImage(bg,0,0);
                
                character.onload = function(){
                    ctx.drawImage(character, 950, 100)
                }
    
                ctx.fillStyle = 'white';
                ctx.font = 'bold 90pt Boogaloo';
                ctx.fillText(playerStats.name, 100, 240)
        
                ctx.fillStyle = 'white';
                ctx.font = 'bold 50pt Boogaloo';
                ctx.fillText(wins, 230, 500)
        
                ctx.fillText(winrate, 550, 500)
        
                ctx.fillText(matches, 950, 500)
                ctx.fillText(kd, 230, 720)
                ctx.fillText(killsmatch.substring(0,5), 550, 720)
                ctx.fillText(kills, 950, 720)
            }
            
            canvasel.style = 'display: block;';
            btnDownload.style = 'display: block;';
            statsLabel.style = 'display: block;';
        }
    }else{

        canvasel.style = 'display: none;';
        btnDownload.style = 'display: none;';
        statsLabel.style = 'display: none;';
        errorh3.textContent = playerStats.error || playerStats.message;
    }
}