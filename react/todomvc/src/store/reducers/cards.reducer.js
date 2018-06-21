// reudcer 负责返回初始值和更改后的
import { ADD_CARD } from '../actions/cards.action';

let init = {
  cards: [{
    name: 'cxy',
    age: 123,
    flag: false
  }]
}
export function cardsReducer (state = init, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      }
    default:
      return state;
  }
}