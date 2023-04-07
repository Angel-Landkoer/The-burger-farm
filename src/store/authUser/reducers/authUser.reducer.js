import { SIGN_UP, SIGN_UP_START, SIGN_UP_FAIL, LOGIN, LOGIN_START, LOGIN_FAIL } from "../actions/authUser.action";

const initialState = {
  token: null,
  userId: '',
  isLoading: false,
  nameTokenUser: '',
  existemAccount: false,
}

export const authReducer = (state = initialState, action) => {

  if (action.type == SIGN_UP_START) return { ...state, isLoading: true };
  if (action.type == SIGN_UP) return { ...state, isLoading: false, token: action.token, userId: action.userId, nameTokenUser: action.nameToken };
  if (action.type == SIGN_UP_FAIL) return { ...state, isLoading: false };
  if (action.type == LOGIN_START) return { ...state, isLoading: true };
  if (action.type == LOGIN) return { ...state, isLoading: false, existemAccount: action.registered, userId: action.userId };
  if (action.type == LOGIN_FAIL) return { ...state, isLoading: false };

  return state
}