import { FLIP_CARD, PLAY_AGAIN } from "../actions/actionTypes";
import { cards } from '../utils/constant';

const initialState = {
    cards: cards,
    player1: {
        points: 0,
        color: 'rgb(13 247 84)'
    },
    player2: {
        points: 0,
        color: 'rgb(218 7 47)'
    },
    activePlayer: 1,
    firstMove: true,
    firstPickedCard: null,
    remainingPairs: cards.size / 2
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FLIP_CARD:
            const newCardsMap = new Map(state.cards);

            let pickedCard = state.cards.get(action.payload.cardId);
            let changedPickedCard;
            let newActivePlayer = state.activePlayer;
            let player={};
            let remainingPairs={};
            if ( state.firstMove ) {
                
                changedPickedCard = {...pickedCard, isFaceUp: true };
                newCardsMap.set(action.payload.cardId, changedPickedCard);

            } else {


                if ( pickedCard.symbol === state.firstPickedCard.symbol ) {
                    
                    const changedFirstPickedCard = {...state.firstPickedCard, belongsTo: state.activePlayer };
                    newCardsMap.set(changedFirstPickedCard.id, changedFirstPickedCard);
                    newCardsMap.set(pickedCard.id, {...pickedCard, isFaceUp: true, belongsTo: state.activePlayer });
                    changedPickedCard = null;
                    player = state.activePlayer === 1 ? 
                            {player1: {...state.player1, points: (state.player1.points+1)}} :
                            {player2: {...state.player2, points: (state.player2.points+1)}}
                    remainingPairs = {remainingPairs: state.remainingPairs - 1};

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
                activePlayer: newActivePlayer,
                ...player,
                ...remainingPairs
            };
        
        case PLAY_AGAIN:
            return {
                cards: cards,
                player1: {
                    points: 0,
                    color: 'rgb(13 247 84)'
                },
                player2: {
                    points: 0,
                    color: 'rgb(218 7 47)'
                },
                activePlayer: 1,
                firstMove: true,
                firstPickedCard: null,
                remainingPairs: cards.size / 2
            }
            
        default:
            return state;
    }
  }
  