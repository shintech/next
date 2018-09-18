import fetch from 'isomorphic-fetch'
import getConfig from 'next/config'

const host = (getConfig()) ? getConfig().publicRuntimeConfig.hostname : 'localhost:8000'

export function sendFile (body) {
  const data = new FormData()

  data.append('file', body.files[0])
  data.append('filename', 'filename')

  return fetch(`https://${host}/api/files`, {
    method: 'POST',
    body: data
  })
}
