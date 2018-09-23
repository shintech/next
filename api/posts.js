import fetch from 'isomorphic-fetch'
import getConfig from 'next/config'

export function getPosts (host) {
  return fetch(`https://${host}/api/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function getPost (slug, host) {
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
