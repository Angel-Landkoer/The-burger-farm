export const ADD_CART = "@ADD_CART"
export const DELETED_ITEM = "@DELETED_ITEM"
export const DELETED_ALL = "@DELETED_ALL"
export const CART_LENGTH = "@CART_LENGTH"
// export const TOTAL_AMOUNT = "@TOTAL_AMOUNT"

export const addItemCart = (item) => { type: ADD_CART, item }

export const deletedItemCart = (deletedItem) => { type: DELETED_ITEM, deletedItem }

export const deletedAll = () => { type: DELETED_ALL }

export const cartLength = () => { type: CART_LENGTH }

// export const totalAmount = () => { type: TOTAL_AMOUNT }

// agregar
// eliminar item
// eliminar todos 
// aumetar contador
// sacar monto total
// cantidad de items - length