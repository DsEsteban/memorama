import React from 'react'
import { useSelector } from 'react-redux'
import './pointsBoard.css'

const Player1Counter = () => {
    const player1Info = useSelector(state => state.game.player1)
    
    return (
        <div>player 1: <span className={'player-square'} style={{backgroundColor: player1Info.color}}></span><span>{player1Info.points}</span></div>
    );
}

export default Player1Counter;
