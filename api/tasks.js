/*  /api/about.js
*/
import fetch from 'isomorphic-fetch'

export function fetchTasks () {
  return fetch('http://dev.shintech.ninja:8000/api/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
