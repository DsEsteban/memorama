import './card.css';

const Card = ({ isFaceUp, symbol, owner }) => {

    return (
        <div className='card-container'>
            {
                isFaceUp &&
                <div className={'card-content'}>{symbol}
                    {owner && <span>{owner}</span>}
                </div>
            }
            {
                !isFaceUp &&
                <div className='card-content face-down'></div>
            }
        </div>
  );
}

export default Card;
