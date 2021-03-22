import React, { useState } from 'react'
import CardUI from './cardUI'

const Card = ({ symbol }) => {
    const [isFaceUp, setFaceUp] = useState(false);
    const handleFlipCard = () => setFaceUp( isFaceUp => !isFaceUp)

    return (
        <div onClick={handleFlipCard}>
            <CardUI 
                isFaceUp={isFaceUp} 
                symbol={symbol}
            />
        </div>
    );
}

export default Card;
