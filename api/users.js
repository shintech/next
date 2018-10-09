import fetch from 'isomorphic-fetch'

export function getUsers (host) {
  return fetch(`https://${host}/api/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function getUser (id, host) {
  return fetch(`https://${host}/api/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function addUser (user, host) {
  return fetch(`https://${host}/api/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function login (username, password, host) {
  return fetch(`https://${host}/api/users/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
