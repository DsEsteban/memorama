import './card.css';

const Card = ({ isFaceUp, symbol }) => {

    return (
        <div className='card-container'>
            {
                isFaceUp &&
                <div className='card-content'>{symbol}</div>
            }
            {
                !isFaceUp &&
                <div className='card-content face-down'></div>
            }
        </div>
  );
}

export default Card;
