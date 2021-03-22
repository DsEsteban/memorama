import PointsBoard from '../pointsBoard'
import Card from '../card'
import './board.css'

const BoardUI = ({ cards }) => {

    return (
        <>  
            <PointsBoard />
            <div className='board-container'>
                {
                    cards.map(
                        ({ id }) => <Card id={id} key={id} />
                    )
                }
            </div>
        </>
  );
}

export default BoardUI;
