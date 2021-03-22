import React from 'react'
import { useSelector } from 'react-redux'
import Player1Counter from './player1Counter'
import Player2Counter from './player2Counter'

const PointsBoard = () => {

    const { remainingPairs } = useSelector(state => state.game)
    return (
        <>  
            <p>{remainingPairs} pairs to Finish</p>
            <Player1Counter />
            <Player2Counter />
        </>
    );
}

export default PointsBoard;
