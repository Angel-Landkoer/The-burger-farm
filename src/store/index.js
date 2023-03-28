import { createStore, combineReducers } from 'redux'
import { cartReducer } from './cartSistem/reducers/cartSistem.reducer'
import { globalDataReducer } from './globalData/reducers/globalData.reducer'

const RootReducers = combineReducers({
  cart: cartReducer,
  data: globalDataReducer,
})

export default createStore(RootReducers)