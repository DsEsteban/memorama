import { useSelector } from 'react-redux'
import './board.css';
import BoardUI from './boardUI'

const Board = () => {
    const { cards } = useSelector(state => state.game)
    console.log('cards=>', cards)
    
    return (
        <div>
            <BoardUI cards={Array.from(cards.values())}/>
        </div>
    );
}

export default Board;
