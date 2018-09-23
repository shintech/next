import fetch from 'isomorphic-fetch'
import getConfig from 'next/config'
import { namespaceConfig, dynamicPropertyConfig } from 'fast-redux'

const DEFAULT_STATE = {}
const {action} = namespaceConfig('posts', DEFAULT_STATE)

const DEFAULT_REDDIT_STATE = {
  posts: []
}

// const {
//   propertyAction: postsAction,
//   getPropertyState: getPoststState
// } = dynamicPropertyConfig(action, DEFAULT_REDDIT_STATE)


// export function getPosts (host) {
//   return fetch(`https://${host}/api/posts`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
// }

// export function getPost (slug, host) {
//   return fetch(`https://${host}/api/posts/${slug}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
// }

// export function addPost (post) {
//   return fetch(`https://${host}/api/posts`, {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
// }


export const fetchPostsIfNeed = () => {
}
