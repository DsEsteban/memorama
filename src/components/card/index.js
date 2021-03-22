import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { flipCard } from '../../actions'
import CardUI from './cardUI'

const Card = ({ id }) => {
    const dispatch = useDispatch();
    const cardInfo = useSelector(state => state.game.cards.get(id))
    const [isFaceUp, setFaceUp] = useState(false);
    const handleFlipCard = () => {
        setFaceUp( isFaceUp => !isFaceUp)
        dispatch(flipCard(id))
    }
    console.log('render card ',id )

    return (
        <div onClick={handleFlipCard}>
            <CardUI 
                isFaceUp={cardInfo.isFaceUp} 
                symbol={cardInfo.symbol}
                owner={cardInfo.belongsTo}
            />
        </div>
    );
}

export default Card;
