import { namespaceConfig } from 'fast-redux'

const DEFAULT_STATE = { posts: [], loading: true }

const { actionCreator, getState: getHomePageState } = namespaceConfig('posts', DEFAULT_STATE)

const fetchPosts = actionCreator(function fetchPosts (state, data) {
  return { ...state, data, loading: false }
})

export {
  getHomePageState, fetchPosts
}
