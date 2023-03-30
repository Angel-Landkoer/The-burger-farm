import { ADD_CART, DELETED_ITEM } from '../actions/cartSistem.action'

const initionalState = {
  cartItems: [],
  sizeCart: 0,
  total: 0
}

export const cartReducer = (state = initionalState, action) => {
  if (action.type == ADD_CART) {
    const newCart = [...state.cartItems, action.item]
    return { ...state, cartItems: newCart, sizeCart: newCart.length }
  }
  if (action.type == DELETED_ITEM) {
    const existing = state.cartItems.some(item => item.name == action.deletedItem.name)
    if (!existing) return { ...state, cartItems: state.cartItems }

    const findIndex = state.cartItems.filter(item => item.name !== action.deletedItem.name)
    return { ...state, cartItems: findIndex, sizeCart: findIndex.length }
  }
  // if (action.type == TOTAL_AMOUNT) return
  return state
}