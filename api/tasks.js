import getConfig from 'next/config'
import fetch from 'isomorphic-fetch'

const host = (getConfig()) ? getConfig().publicRuntimeConfig.hostname : 'localhost:8000'

export function fetchTasks () {
  return fetch(`https://${host}/api/tasks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
