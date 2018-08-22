/*  /api/about.js
*/
import fetch from 'isomorphic-fetch'

export function fetchTasks () {
  return fetch('https://shintech.ninja/api/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
