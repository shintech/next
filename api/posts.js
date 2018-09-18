import fetch from 'isomorphic-fetch'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

export function getPosts () {
  return fetch(`https://${host}/api/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function getPost (slug) {
  return fetch(`https://${host}/api/posts/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function addPost (post) {
  return fetch(`https://${host}/api/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
