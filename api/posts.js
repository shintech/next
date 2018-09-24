import fetch from 'isomorphic-fetch'

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

export function addPost (post, host) {
  return fetch(`https://${host}/api/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
