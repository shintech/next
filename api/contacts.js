/*  /api/contacts.js
*/
import fetch from 'isomorphic-fetch'

export function fetchData () {
  return fetch('https://shintech.ninja/api/contact', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
