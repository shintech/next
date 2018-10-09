import { namespaceConfig } from 'fast-redux'

const DEFAULT_STATE = { data: {}, loading: true }

const { actionCreator, getState: getPostPageState } = namespaceConfig('users', DEFAULT_STATE)

const fetchUsers = actionCreator(function fetchPost (state, data) {
  return { ...state, data, loading: false }
})

const login = actionCreator(function login (state, data) {
  return { ...state, data }
})

export {
  getPostPageState, fetchUsers, login
}
