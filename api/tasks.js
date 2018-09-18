import getConfig from 'next/config'
import fetch from 'isomorphic-fetch'

const { publicRuntimeConfig } = getConfig()
const host = publicRuntimeConfig.hostname

export function fetchTasks () {
  return fetch(`https://${host}/api/tasks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
