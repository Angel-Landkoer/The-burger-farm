import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './cartSistem/reducers/cartSistem.reducer'
import { globalDataReducer } from './globalData/reducers/globalData.reducer'
import { authReducer } from './authUser/reducers/authUser.reducer'

const RootReducers = combineReducers({
  cart: cartReducer,
  data: globalDataReducer,
  auth: authReducer
})

export default createStore(RootReducers, applyMiddleware(thunk))
