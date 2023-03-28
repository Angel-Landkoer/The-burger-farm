import { ADD_CART, DELETED_ALL, DELETED_ITEM, TOTAL_AMOUNT } from '../actions/cartSistem.action'

const initionalState = {
  cart: [],
  sizeCart: 0,
  total: 0
}

export const cartReducer = (state = initionalState, action) => {
  if (action.type == ADD_CART) {
    const newCart = [{a: "queso", b: "soso"}]
    return { ...state, cart: newCart }
  }

  if (action.type == DELETED_ITEM) return
  if (action.type == DELETED_ALL) return
  if (action.type == TOTAL_AMOUNT) return
  // if(action.type == "") return
  return state
}