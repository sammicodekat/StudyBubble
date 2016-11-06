// import axios from 'axios';

export function addDeck(deck) {
  return {
    type: 'DECK_ADD',
    payload: deck,
  };
}

export function setCurrentDeck(deck) {
  return {
    type: 'SET_CURRENT_DECK',
    payload: deck,
  };
}

export function deleteDeck(deckId) {
  return {
    type: 'DECK_DELETE',
    payload: deckId,
  };
}
