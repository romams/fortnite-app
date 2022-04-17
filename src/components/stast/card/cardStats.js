import './cardStats.css'
import { minutesToDays, separator } from 'utils/minutesToDays';

const CardStats = ({ gameMode, stats }) => {

    const { dia, horas, minutos } = minutesToDays(stats?.minutesplayed)

    return <>
        <div className='card-stats col-md-4 col-sm-12'>
            <div className={`${gameMode}`}>
                <span className='card-mode'>{gameMode}</span>
                <span>{separator(stats?.matchesplayed)} MATCHES</span>
            </div>
            <div className='card-content'>
                <div className='card-info-section'>
                    <p className='stats-section'>Wins</p>
                    <span className='card-numbers'>{separator(stats?.placetop1)}</span>
                </div>
                <div className='card-info-section'>
                    <p className='stats-section'>Kills</p>
                    <span className='card-numbers'>{separator(stats?.kills)}</span>
                </div>
                <div className='card-info-section'>
                    <p className='stats-section'>Win %</p>
                    <span className='card-numbers'>{stats?.winrate}</span>
                </div>
                <div className='card-info-section'>
                    <p className='stats-section'>K/D</p>
                    <span className='card-numbers'>{stats?.kd}</span>
                </div>
                <div className='card-info-section'>
                    <p className='stats-section'>TOP 3</p>
                    <span className='card-numbers'>{separator(stats?.placetop3)}</span>
                </div>
                <div className='card-info-section'>
                    <p className='stats-section'>TOP 5</p>
                    <span className='card-numbers'>{separator(stats?.placetop5)}</span>
                </div>
                <div className='card-info-section'>
                    <p className='stats-section'>TOP 10</p>
                    <span className='card-numbers'>{separator(stats?.placetop10)}</span>
                </div>
                <div className='card-info-section'>
                    <p className='stats-section'>TOP 12</p>
                    <span className='card-numbers'>{separator(stats?.placetop12)}</span>
                </div>
                <div className='card-info-section'>
                    <p className='stats-section'>TIME PLAYED</p>
                    <span className='card-numbers'>{`${dia}D ${horas}H ${minutos}M`}</span>
                </div>
                <div className='card-info-section'>
                    <p className='stats-section'>SCORE</p>
                    <span className='card-numbers'>{separator(stats?.score)}</span>
                </div>
            </div>
        </div>
    </>
}

export default CardStats;