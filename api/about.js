import getConfig from 'next/config'
import fetch from 'isomorphic-fetch'

const host = (getConfig()) ? getConfig().publicRuntimeConfig.hostname : 'localhost:8000'

export function fetchData () {
  return fetch(`https://${host}/api/about`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
