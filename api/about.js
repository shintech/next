/*  /api/about.js
*/
import fetch from 'isomorphic-fetch'

export function fetchData () {
  return fetch('https://shintech.ninja/api/about', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
