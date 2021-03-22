import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Player1Counter from './player1Counter'
import Player2Counter from './player2Counter'
import { playAgain } from '../../actions'

const PointsBoard = () => {
    const dispatch = useDispatch()
    const { remainingPairs } = useSelector(state => state.game)
    const restartGame = () => {
        dispatch(playAgain())
    }

    return (
        <>  
            <p>{remainingPairs} pairs to Finish</p>
            <Player1Counter />
            <Player2Counter />
            <button onClick={restartGame}>Reiniciar partida</button>
        </>
    );
}

export default PointsBoard;
