import { useSelector } from 'react-redux'
import './board.css';
import BoardUI from './boardUI'

const Board = () => {
    const { cards } = useSelector(state => state.game)
    
    return (
        <div>
            <BoardUI cards={Array.from(cards.values())}/>
        </div>
    );
}

export default Board;
