import fetch from 'isomorphic-fetch'

export function sendFile (body) {
  const data = new FormData()

  data.append('file', body.files[0])
  data.append('filename', 'filename')

  return fetch('/api/files', {
    method: 'POST',
    body: data
  })
}
