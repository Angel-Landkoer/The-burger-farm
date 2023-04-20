import { PRODUCT_CATEGORY, CREATE_ORDER, CREATE_ORDER_FAIL, CREATE_ORDER_START, GET_ORDER, GET_ORDER_FAIL, GET_ORDER_START } from '../actions/globalData.action'
import { datas } from '../../../utils/data'

const data = [
  "burgers",
  "hotDogs",
  "sandwichs",
  "specialities",
  "kids",
  "adicionals",
  "milkshakesAndSlushies",
  "liquors",
  "portions",
  "watersAndJuicesAndSoftDrinks",
];

const initialState = {
  productsCategoryName: data,
  productsData: datas,
  productsCategory: [],
  orders: false,
  success: false,
  isLoading: false,
  orderId: ""
}

export const globalDataReducer = (state = initialState, action) => {
  if (action.type == PRODUCT_CATEGORY) {
    const mapCategory = state.productsCategoryName.map((item) => state.productsData[item]);
    const filterCategory = mapCategory.filter((item) => item.category == action.numCategory)
    return { ...state, productsCategory: filterCategory[0] }
  }
  if (action.type == CREATE_ORDER_START) return { ...state, isLoading: true, }
  if (action.type == CREATE_ORDER) return { ...state, isLoading: false, success: action.success, orderId: action.id }
  if (action.type == CREATE_ORDER_FAIL) return { ...state, isLoading: false, success: action.success }
  if (action.type == GET_ORDER_START) return { ...state, isLoading: true }
  if (action.type == GET_ORDER) return { ...state, isLoading: false, orders: action.orders }
  if (action.type == GET_ORDER_FAIL) return { ...state, isLoading: false }
  return state
}
