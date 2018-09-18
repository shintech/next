import getConfig from 'next/config'
import fetch from 'isomorphic-fetch'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

export function fetchAccounts () {
  return fetch(`https://${host}/api/accounts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
