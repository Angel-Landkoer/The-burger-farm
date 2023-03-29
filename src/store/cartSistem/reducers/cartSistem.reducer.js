import { ADD_CART, DELETED_ALL, DELETED_ITEM, CART_LENGTH } from '../actions/cartSistem.action'

const initionalState = {
  cartItems: [],
  sizeCart: 0,
  total: 0
}

export const cartReducer = (state = initionalState, action) => {
  if (action.type == ADD_CART) {
    const newCart = [...state.cartItems, action.item]
    return { ...state, cartItems: newCart }
  }

  if (action.type == DELETED_ITEM) {
    const existing = state.cartItems.some(item => item.name == action.deletedItem.name)
    if (!existing) return { ...state, cartItems: state.cartItems }
    const findIndex = state.cartItems.findIndex(item => item.name == action.deletedItem.name)
    const removeItem = state.cartItems.splice(findIndex, 0)
    return { ...state, cartItems: removeItem }
  }
  if (action.type == DELETED_ALL) return { ...state, cartItems: [] }
  if (action.type == CART_LENGTH) return { ...state, sizeCart: state.cartItems.length }
  // if (action.type == TOTAL_AMOUNT) return
  // if(action.type == "") return
  return state
}