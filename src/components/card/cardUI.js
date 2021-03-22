import './card.css';

const Card = ({ isFaceUp, symbol, owner }) => {
    console.log('owner=>', owner)
    return (
        <div className='card-container' style={owner && {boxShadow: `0px 0px 8px 2px ${owner}`}}>
            {
                isFaceUp &&
                <div className={'card-content'}>{symbol}</div>
            }
            {
                !isFaceUp &&
                <div className='card-content face-down'></div>
            }
        </div>
  );
}

export default Card;
