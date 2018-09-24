import { namespaceConfig } from 'fast-redux'

const DEFAULT_STATE = { post: {} }

const { actionCreator, getState: getPostPageState } = namespaceConfig('post', DEFAULT_STATE)

const fetchPost = actionCreator(function fetchPost (state, post) {
  return { ...state, post, loading: false }
})

export {
  getPostPageState, fetchPost
}
