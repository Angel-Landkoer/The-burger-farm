import { SIGN_UP, SIGN_UP_START, SIGN_UP_FAIL, LOGIN, LOGIN_START, LOGIN_FAIL, RESET_ACCOUNT, UPDATE_DATA_USER, UPDATE_DATA_USER_FAIL, UPDATE_DATA_USER_START, UPDATE_DATA_ADDRESS, UPDATE_DATA_ADDRESS_FAIL, UPDATE_DATA_ADDRESS_START } from "../actions/authUser.action";

const initialState = {
  token: null,
  userId: '',
  isLoading: false,
  nameTokenUser: '',
  existemAccount: false,
  allDataUser: false
}

export const authReducer = (state = initialState, action) => {

  if (action.type == SIGN_UP_START) return { ...state, isLoading: true };
  if (action.type == SIGN_UP) return { ...state, isLoading: false, token: action.token, userId: action.userId, nameTokenUser: action.nameToken };
  if (action.type == SIGN_UP_FAIL) return { ...state, isLoading: false };
  if (action.type == LOGIN_START) return { ...state, isLoading: true };
  if (action.type == LOGIN) {
    const newAllDataUser = action.allDataUser
    return { ...state, isLoading: false, existemAccount: action.registered, userId: action.userId, allDataUser: newAllDataUser };
  }
  if (action.type == LOGIN_FAIL) return { ...state, isLoading: false };
  if (action.type == UPDATE_DATA_USER_START) return { ...state, isLoading: true }
  if (action.type == UPDATE_DATA_USER) {
    const newAllDataUser = action.allDataUser
    return { ...state, isLoading: false, allDataUser: newAllDataUser }
  }
  if (action.type == UPDATE_DATA_USER_FAIL) return { ...state, isLoading: false }
  if (action.type == UPDATE_DATA_ADDRESS_START) return { ...state, isLoading: true }
  if (action.type == UPDATE_DATA_ADDRESS) {
    const newAllDataUser = action.allDataUser
    return { ...state, isLoading: false, allDataUser: newAllDataUser }
  }
  if (action.type == UPDATE_DATA_ADDRESS_FAIL) return { ...state, isLoading: false }
  if (action.type == RESET_ACCOUNT) return { ...state, isLoading: false, token: null, userId: '', nameTokenUser: "", existemAccount: false };

  return state
}