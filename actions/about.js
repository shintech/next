import C from '../store/constants'
import { about } from '../api'

function fetchTasks () {
  return async dispatch => {
    const res = await about.getTasks()
    const json = await res.json()

    dispatch({
      type: C.FETCH_TASKS,
      payload: json
    })
  }
}

function addTask (task) {
  return async dispatch => {
    let payload

    try {
      let result = await about.addTask(task)
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

export default {
  fetchTasks,
  addTask
}
