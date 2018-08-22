/*  /api/posts.js
*/
import fetch from 'isomorphic-fetch'

export function getPosts () {
  return fetch('/api/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function getPost (slug) {
  return fetch(`https://shintech.ninja/api/posts/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function addPost (body) {
  return fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
