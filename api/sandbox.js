import fetch from 'isomorphic-fetch'
import getConfig from 'next/config'

export function sendFile (body, host) {
  const data = new FormData()

  data.append('file', body.files[0])
  data.append('filename', 'filename')

  return fetch(`https://${host}/api/files`, {
    method: 'POST',
    body: data
  })
}
