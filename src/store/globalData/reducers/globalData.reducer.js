import { PRODUCT_CATEGORY } from '../actions/globalData.action'
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
}

export const globalDataReducer = (state = initialState, action) => {
  if (action.type == PRODUCT_CATEGORY) {
    const mapCategory = state.productsCategoryName.map((item) => state.productsData[item]);
    return { ...state, productsCategory: mapCategory.filter(item.category == action.numCategory) }
  }
  return state
}