/*  /api/contacts.js
*/
import fetch from 'isomorphic-fetch'

export function fetchData () {
  return fetch('http://dev.shintech.ninja:8000/api/contact', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
