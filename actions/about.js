/*  /actions/about.js
*/
import C from '../store/constants'
import { about as api } from '../api'

export default {
  fetchTasks: function () {
    return async dispatch => {
      const res = await api.getTasks()
      const json = await res.json()

      dispatch({
        type: C.FETCH_TASKS,
        payload: json
      })
    }
  },

  addTask: function (task) {
    return async dispatch => {
      let payload

      try {
        let result = await api.addTask(task)
        payload = await result.json()
      } catch (err) {
        throw new Error(err.message)
      }

      dispatch({
        type: C.ADD_TASK,
        payload
      })
    }
  }
}
