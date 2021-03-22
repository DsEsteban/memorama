import { FLIP_CARD } from "./actionTypes";

export const flipCard = cardId => ({
  type: FLIP_CARD,
  payload: {
    cardId
  }
});

