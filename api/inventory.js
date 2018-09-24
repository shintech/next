import fetch from 'isomorphic-fetch'

export function getInventory (host) {
  return fetch(`https://${host}/api/inventory`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function searchInventory (slug, host) {
  let uri = `https://${host}/api/search?slug=${slug}`

  return fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
