import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import { cartReducer } from './cartSistem/reducers/cartSistem.reducer'
import { globalDataReducer } from './globalData/reducers/globalData.reducer'
import { authReducer } from './authUser/reducers/authUser.reducer'

const persistConfig = {
  key: "root",
  storage: AsyncStorage
}

const RootReducers = combineReducers({
  cart: cartReducer,
  data: globalDataReducer,
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, RootReducers)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const storePersisted = persistStore(store)
