import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { flipCard } from '../../actions'
import CardUI from './cardUI'

const Card = ({ id }) => {
    const dispatch = useDispatch();
    const cardInfo = useSelector(state => state.game.cards.get(id))
    const { player1, player2 } = useSelector(state => state.game)
    const color = cardInfo.belongsTo ? cardInfo.belongsTo == 1 ? player1.color : player2.color : null;
    const handleFlipCard = () => {
        if (cardInfo.belongsTo !==1 && cardInfo.belongsTo!==-1) dispatch(flipCard(id))
    }

    return (
        <div onClick={handleFlipCard}>
            <CardUI 
                isFaceUp={cardInfo.isFaceUp} 
                symbol={cardInfo.symbol}
                owner={color}
            />
        </div>
    );
}

export default Card;
