import React from 'react'
import { useSelector } from 'react-redux'
import './pointsBoard.css'

const Player2Counter = () => {
    const player2Info = useSelector(state => state.game.player2)
    
    return (
        <div>player 2: <span className={'player-square'} style={{backgroundColor: player2Info.color}}></span><span>{player2Info.points}</span></div>
    );
}

export default Player2Counter;
