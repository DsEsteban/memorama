import { FLIP_CARD } from "../actions/actionTypes";
import { cards } from '../utils/constant';

console.log('cardsMap=>',cards)

const initialState = {
    cards: cards,
    player1: {},
    player2: {},
    activePlayer: 1,
    firstMove: true,
    firstPickedCard: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FLIP_CARD:
            console.log('flip card', action.payload.cardId)
            const newCardsMap = new Map(state.cards);

            let pickedCard = state.cards.get(action.payload.cardId);
            let changedPickedCard;
            let newActivePlayer = state.activePlayer;

            if ( state.firstMove ) {
                
                changedPickedCard = {...pickedCard, isFaceUp: true };
                newCardsMap.set(action.payload.cardId, changedPickedCard);

            } else {


                if ( pickedCard.symbol === state.firstPickedCard.symbol ) {
                    
                    const changedFirstPickedCard = {...state.firstPickedCard, belongsTo: state.activePlayer };
                    newCardsMap.set(changedFirstPickedCard.id, changedFirstPickedCard);
                    newCardsMap.set(pickedCard.id, {...pickedCard, isFaceUp: true, belongsTo: state.activePlayer });
                    changedPickedCard = null;


                } else {

                    newCardsMap.set(state.firstPickedCard.id, {...state.firstPickedCard, isFaceUp: false });
                    newCardsMap.set(pickedCard.id, {...pickedCard, isFaceUp: false });
                    changedPickedCard = null;
                    newActivePlayer = newActivePlayer * -1;

                }

            }

            return {
                ...state,
                firstMove: !state.firstMove,
                cards: newCardsMap,
                firstPickedCard: changedPickedCard,
                activePlayer: newActivePlayer
            };

        default:
            return state;
    }
  }
  