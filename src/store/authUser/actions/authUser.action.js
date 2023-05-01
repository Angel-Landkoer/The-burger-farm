import { SIGN_UP_URL, API_URL, LOGIN_URL } from "../../../utils/constants/Database"

export const SIGN_UP = "@SIGN_UP"
export const SIGN_UP_START = "@SIGN_UP_START"
export const SIGN_UP_FAIL = "@SIGN_UP_FAIL"
export const LOGIN = "@LOGIN"
export const LOGIN_START = "@LOGIN_START"
export const LOGIN_FAIL = "@LOGIN_FAIL"
export const UPDATE_DATA_USER_FAIL = "@UPDATE_DATA_USER_FAIL"
export const UPDATE_DATA_USER = "@UPDATE_DATA_USER"
export const UPDATE_DATA_USER_START = "@UPDATE_DATA_USER_START"
export const UPDATE_DATA_ADDRESS_START = "@UPDATE_DATA_ADDRESS_START"
export const UPDATE_DATA_ADDRESS = "@UPDATE_DATA_ADDRESS"
export const UPDATE_DATA_ADDRESS_FAIL = "@UPDATE_DATA_ADDRESS_FAIL"
export const GET_DATA_START = "@GET_DATA_START"
export const GET_DATA = "@GET_DATA"
export const GET_DATA_FAIL = "@GET_DATA_FAIL"
export const RESET_ACCOUNT = "@RESET_ACCOUNT"

export const signUp = (email, password) => {
  return async dispatch => {
    try {
      dispatch({
        type: SIGN_UP_START
      })

      const option = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email, password, returnSecureToken: true
        })
      }

      const response = await fetch(SIGN_UP_URL, option)

      if (!response.ok) {
        const errorResData = await response.json();
        const errorIdMessage = errorResData.error.message;
        let message = "User could not registered"
        if (errorIdMessage == "EMAIL_EXISTS") { message = "User is existing" }

        throw new Error(message)
      }

      const data = await response.json()

      const optionAdditional = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: data.localId,
          email: data.email,
          phone: 0,
          name: '',
          lastName: '',
          address: {
            city: '',
            route: '',
            dataDirection: '',
            district: '',
            additionalInformation: ''
          }

        })
      }

      const responseAdditionDetail = await fetch(`${API_URL}users.json`, optionAdditional)
      const dataAdditionalDetail = await responseAdditionDetail.json()

      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
        nameToken: dataAdditionalDetail.name
      })

    } catch (error) {
      dispatch({
        type: SIGN_UP_FAIL
      })
      alert(error);
    }
  }
}


export const login = (email, password) => {
  return async dispatch => {

    dispatch({
      type: LOGIN_START
    })

    const option = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    }

    try {

      const response = await fetch(LOGIN_URL, option)

      if (!response.ok) {
        const errorLogin = await response.json()
        throw new Error(errorLogin.error.message)
      }

      const data = await response.json()

      const responseAdditionDetail = await fetch(`${API_URL}/users.json`)
      const dataAdditionalDetail = await responseAdditionDetail.json()

      const user = Object.keys(dataAdditionalDetail).map(item => { return { id: item, ...dataAdditionalDetail[item] } }).find(element => element.userId == data.localId)

      dispatch({
        type: LOGIN,
        registered: data.registered,
        userId: data.localId,
        allDataUser: user
      })

    } catch (error) {
      dispatch({
        type: LOGIN_FAIL
      })
      alert(error);
    }
  }
}

export const updateDataUser = (userID, data) => {
  return async dispatch => {
    try {
      dispatch({ type: UPDATE_DATA_USER_START })
      const responseUsers = await fetch(`${API_URL}users.json`)

      if (!responseUsers.ok) {
        const errorIdMessage = await responseUsers.json()
        throw new Error(errorIdMessage.error.message)
      }

      const dataUsers = await responseUsers.json()
      const findUser = Object.keys(dataUsers).map(item => { return { id: item, ...dataUsers[item] } }).find(item => item.userId == userID)

      const option = {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          lastName: data.lastName,
          phone: data.phone
        })
      }

      const responsePatch = await fetch(`${API_URL}/users/${findUser.id}.json`, option)

      if (!responsePatch.ok) {
        const errorIdMessage = await responsePatch.json()
        throw new Error(errorIdMessage.error.message)
      }

      const dataPatch = await responsePatch.json()

    } catch (error) {
      alert(error)
      dispatch({ type: UPDATE_DATA_USER_FAIL })
    }
  }
}

export const updateDataAddress = (userID, data) => {
  return async dispatch => {
    try {
      dispatch({ type: UPDATE_DATA_ADDRESS_START })
      const responseUsers = await fetch(`${API_URL}/users.json`)

      if (!responseUsers.ok) {
        const errorIdMessage = await responseUsers.json()
        throw new Error(errorIdMessage.error.message)
      }

      const dataAddress = await responseUsers.json()
      const findUser = Object.keys(dataAddress).map(item => { return { id: item, ...dataAddress[item] } }).find(item => item.userId == userID)

      const option = {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          additionalInformation: data.additionalInformation,
          city: data.city,
          district: data.district,
          route: data.route,
          dataDirection: data.dataDirection
        })
      }

      const responsePatch = await fetch(`${API_URL}/users/${findUser.id}/address.json`, option)

      if (!responsePatch.ok) {
        const errorIdMessage = await responsePatch.json()
        throw new Error(errorIdMessage.error.message)
      }

      const dataPatch = await responsePatch.json()


    } catch (error) {
      alert(error)
      dispatch({ type: UPDATE_DATA_ADDRESS_FAIL })
    }
  }
}

export const getData = (userId) => {
  return async dispatch => {

    try {

      dispatch({ type: GET_DATA_START })

      const response = await fetch(`${API_URL}users.json`)

      if (!response.ok) {
        const errorMessage = response.json()
        throw new Error(errorMessage)
      }

      const data = await response.json()

      const findUser = Object.keys(data).map(item => { return { id: item, ...data[item] } }).find(item => item.userId == userId)
      dispatch({ type: GET_DATA, allDataUser: findUser })

    } catch (error) {
      dispatch({ type: GET_DATA_FAIL })
      alert(error)

    }
  }
}