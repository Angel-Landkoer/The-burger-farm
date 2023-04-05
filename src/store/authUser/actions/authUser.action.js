import { SIGN_UP_URL, API_URL } from "../../../utils/constants/Database"

export const SIGN_UP = "@SIGN_UP"

export const signUp = (email, password) => {
  return async dispatch => {
    try {
      dispatch({
        type: "@SIGN_UP_START"
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
        console.log("errorResData: ", JSON.stringify(errorResData))
        const errorIdMessage = errorResData.error.message;
        let message = "User could not registered"
        if (errorIdMessage == "EMAIL_EXISTS") { message = "User is existing" }

        throw new Error(message)
      }

      const data = await response.json()
      console.log("DataResponse: ", data)

      const optionAdditional = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: data.localId,
          email: data.email,
          phone: null,
          name: '',
          lastName: '',
          address: {
            city: '',
            route: '',
            number: null,
            district: '',
            additionalInformation: ''
          }

        })
      }

      const responseAdditionDetail = await fetch(`${API_URL}users.json`, optionAdditional)
      const dataAdditionalDetail = await responseAdditionDetail.json()
      console.log("dataAdditionalDetail: ", dataAdditionalDetail)

      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
        nameToken: dataAdditionalDetail.name
      })

    } catch (error) {
      dispatch({
        type: "@SIGN_UP_FAIL"
      })
      alert(error);
    }
  }
}

// 5-48