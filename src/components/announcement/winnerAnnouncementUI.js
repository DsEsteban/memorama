import './announcement.css'

const winnerAnnouncementUI = ({ winnerInfo, playAgainAction }) => {
    
    return (
        <div className='winner-announcement'>
            {
                winnerInfo ?
                <h2>The Winner is {winnerInfo}</h2> :
                <h2>The game is tied</h2>
            }
            <button onClick={playAgainAction}>Play Again</button>
        </div>
    );
}

export default winnerAnnouncementUI;
