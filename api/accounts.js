import getConfig from 'next/config'
import fetch from 'isomorphic-fetch'

const host = (getConfig()) ? getConfig().publicRuntimeConfig.hostname : 'localhost:8000'

export function fetchAccounts () {
  return fetch(`https://${host}/api/accounts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
