import './board.css';
import Card from '../card'

const BoardUI = ({ cards }) => {

    return (
        <div className='board-container'>
            {
                cards.map(
                    ({ id }) => <Card id={id} key={id} />
                )
            }
        </div>
  );
}

export default BoardUI;
