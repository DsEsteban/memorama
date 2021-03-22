import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WinnerAnnouncementUI from './winnerAnnouncementUI'
import { playAgain } from '../../actions'

const Announcement = () => {
    const dispatch = useDispatch();
    const { remainingPairs, player1, player2 } = useSelector(state => state.game)

    let winner;
    if (player1.points > player2.points) {
        winner = 'player 1'
    } else if (player1.points < player2.points ) {
        winner = 'player 2'
    } else {
        winner = null
    }

    const handlePlayAgain = () => {
        dispatch(playAgain())
    }

    return (
        <>
            {
                remainingPairs === 0 &&
                <WinnerAnnouncementUI winnerInfo={winner} playAgainAction={handlePlayAgain} />
            }
        </>
    );
}

export default Announcement;
