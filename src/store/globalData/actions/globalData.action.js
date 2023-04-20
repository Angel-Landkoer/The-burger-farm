import { API_URL } from '../../../utils/constants/Database'

export const PRODUCT_CATEGORY = "@PRODUCT_CATEGORY"
export const CREATE_ORDER_START = "@CREATE_ORDER_START"
export const CREATE_ORDER = "@CREATE_ORDER"
export const CREATE_ORDER_FAIL = "@CREATE_ORDER_FAIL"

export const filterCategory = (numCategory) => ({ type: PRODUCT_CATEGORY, numCategory })

export const createOrder = (userId, dataFinalize) => {
  return async dispatch => {
    try {
      dispatch({ type: CREATE_ORDER_START })

      const option = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: dataFinalize.products,
          buyer: {
            name: dataFinalize.name,
            phone: dataFinalize.phone,
            menssenge: dataFinalize.additionalInfo,
            payment: dataFinalize.payment,
            userId
          },
          date: new Date().toLocaleDateString(),
          total: dataFinalize.total
        })
      }

      const responsePutOrder = await fetch(`${API_URL}orders.json`, option)

      if (!responsePutOrder.ok) {
        const errorMenssenge = await responsePutOrder.json()
        throw new Error(errorMenssenge)
      }

      const dataPutOrderResponse = await responsePutOrder.json()
      dispatch({
        type: CREATE_ORDER,
        success: true,
        id: dataPutOrderResponse.name
      })

    } catch (error) {
      alert(error)
      dispatch({ type: CREATE_ORDER_FAIL, success: false })
    }
  }
}