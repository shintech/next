import { namespaceConfig } from 'fast-redux'

const DEFAULT_STATE = { post: {}, loading: true }

const { actionCreator, getState: getPostPageState } = namespaceConfig('post', DEFAULT_STATE)

const fetchPost = actionCreator(function fetchPost (state, data) {
  return { ...state, data, loading: false }
})

export {
  getPostPageState, fetchPost
}
