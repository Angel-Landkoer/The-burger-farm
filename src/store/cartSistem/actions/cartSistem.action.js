export const ADD_CART = "@ADD_CART"
export const DELETED_ITEM = "@DELETED_ITEM"
export const DELETED_ALL_ITEM_CART = "@DELETED_ALL_ITEM_CART"

export const addItemCart = (item) => ({ type: ADD_CART, item })

export const deletedItemCart = (deletedItem) => ({ type: DELETED_ITEM, deletedItem })

export const deletedAllItemCart = () => ({ type: DELETED_ALL_ITEM_CART })
