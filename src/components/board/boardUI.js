import './board.css';
import Card from '../card'

const BoardUI = ({ cards }) => {

    return (
        <div className='board-container'>
            {
                cards.map(
                    value => <Card symbol={value} />
                )
            }
        </div>
  );
}

export default BoardUI;
