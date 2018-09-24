import { namespaceConfig } from 'fast-redux'

const DEFAULT_STATE = { posts: [] }

const { actionCreator, getState: getHomePageState } = namespaceConfig('posts', DEFAULT_STATE)

const fetchPosts = actionCreator(function fetchPosts (state, posts) {
  return { ...state, posts, loading: false }
})

export {
  getHomePageState, fetchPosts
}
