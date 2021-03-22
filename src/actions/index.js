import { FLIP_CARD, PLAY_AGAIN } from "./actionTypes";

export const flipCard = cardId => ({
  type: FLIP_CARD,
  payload: {
    cardId
  }
});

export const playAgain = () => ({
  type: PLAY_AGAIN
});

