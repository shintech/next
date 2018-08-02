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
  return fetch(`/api/posts/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
