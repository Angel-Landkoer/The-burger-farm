import { ADD_CART, DELETED_ITEM, DELETED_ALL_ITEM_CART } from '../actions/cartSistem.action'

const initionalState = {
  cartItems: [],
  sizeCart: 0,
  total: 0
}

const sumTotal = (newData) => newData.map(item => item.count * item.price).reduce((a, b) => a + b, 0)

export const cartReducer = (state = initionalState, action) => {
  if (action.type == ADD_CART) {
    const exists = state.cartItems.some(element => element.name === action.item.name);
    const updatedItems = exists
      ? state.cartItems.map(item =>
        item.name === action.item.name
          ? { ...item, count: item.count + 1 }
          : item
      )
      : [...state.cartItems, action.item];

    return { ...state, cartItems: updatedItems, total: sumTotal(updatedItems), sizeCart: updatedItems.length }
  }
  if (action.type == DELETED_ITEM) {
    const existing = state.cartItems.some(item => item.name == action.deletedItem.name)
    if (!existing) return { ...state, cartItems: state.cartItems }

    const findIndex = state.cartItems.filter(item => item.name !== action.deletedItem.name)
    return { ...state, cartItems: findIndex, total: sumTotal(findIndex), sizeCart: findIndex.length }
  }
  if (action.type == DELETED_ALL_ITEM_CART) return { ...state, cartItems: [] }
  return state
}