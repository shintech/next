import getConfig from 'next/config'
import fetch from 'isomorphic-fetch'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

export function fetchData () {
  return fetch(`https://${host}/api/contact`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
