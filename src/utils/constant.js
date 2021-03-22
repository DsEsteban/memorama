export const cards = new Map();
for (let i = 1; i<21;i++) {
    cards.set(i, { id:i, symbol: i % 2 === 0 ? i -1 : i , isFaceUp:false, belongsTo: null })
}