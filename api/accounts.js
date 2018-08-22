/*  /api/about.js
*/
import fetch from 'isomorphic-fetch'

export function fetchAccounts () {
  return fetch('https://shintech.ninja/api/accounts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
