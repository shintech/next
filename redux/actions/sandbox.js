/*  /actions/sandbox.js
*/
import C from '../store/constants'
import { sandbox as api } from '../../api'

export default {
  increment: function () {
    return async dispatch => {
      dispatch({
        type: C.INCREMENT
      })
    }
  },

  changeMenu: function (option) {
    return async dispatch => {
      dispatch({
        type: C.CHANGE_MENU,
        payload: option
      })
    }
  },

  fetchGraph: function () {
    return async dispatch => {
      dispatch({
        type: C.FETCH_GRAPH
      })
    }
  },

  sendFile: function (file) {
    return async dispatch => {
      let payload

      try {
        let result = await api.sendFile(file)
        payload = await result.json()
      } catch (err) {
        throw new Error(err.message)
      }

      dispatch({
        type: C.SEND_FILE,
        payload
      })
    }
  }
}
