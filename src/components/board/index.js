import './board.css';
import BoardUI from './boardUI'

const TEST_CARDS = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]

const Board = () => {

    return (
        <div>
            <BoardUI cards={TEST_CARDS}/>
        </div>
    );
}

export default Board;
