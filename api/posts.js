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
  return fetch(`http://dev.shintech.ninja:8000/api/posts/${slug}`, {
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
