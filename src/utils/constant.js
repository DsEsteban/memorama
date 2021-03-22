const CARDS_SYMBOLS = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
      
    }
  
    return array;
}

const COPY_CARDS_SYMBOLS = shuffle(CARDS_SYMBOLS);

export const cards = new Map();
for (let i = 0; i < COPY_CARDS_SYMBOLS.length; i++) {
    cards.set(i, { id:i, symbol: COPY_CARDS_SYMBOLS[i], isFaceUp:false, belongsTo: null })
}