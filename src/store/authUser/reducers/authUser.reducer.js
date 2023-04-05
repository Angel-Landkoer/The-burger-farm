import { SIGN_UP } from "../actions/authUser.action";

const initialState = {
  token: null,
  userId: '',
  isLoading: false,
  nameToken: ''
}

export const authReducer = (state = initialState, action) => {

  if (action.type == "@SIGN_UP_START") return { ...state, isLoading: true };
  if (action.type == SIGN_UP) return { ...state, token: action.token, userId: action.userId, nameToken: action.nameToken };
  if (action.type == "@SIGN_UP_FAIL") return { ...state, isLoading: false };

  return state
}