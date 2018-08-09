import fetch from 'isomorphic-fetch'

export function fetchData () {
  return {
    summary: [
      'Next.js',
      'React.js',
      'Redux',
      'Express',
      'PostgreSQL',
      'd3'
    ],

    description: {
      paragraph: 'Universal JavaScript application built with Next.js and Express.js',
      usage: {
        development: './install.sh\nnpm run dev',
        production: 'docker-compose build && docker-compose up -d'
      }
    },

    links: [
      { title: 'home', details: 'List of data fetched from /api/post' },
      { title: 'about', details: 'Details about the application' },
      { title: 'contact', details: 'Information about github or other accounts' }
    ],

    sandbox: [
      { title: 'Redux Increment', details: 'dispatches redux action INCREMENT.' },
      { title: 'Bar Graph', details: 'Bar Graph made using d3.' },
      { title: 'Upload File', details: 'Upload a file.' },
      { title: 'FlexBox', details: 'CSS FlexBox demonstration.' }
    ],

    references: [
      { url: 'https://github.com/zeit/next.js', title: 'https://github.com/zeit/next.js' },
      { url: 'https://github.com/timberio/next-go/', title: 'https://github.com/timberio/next-go/' }
    ]
  }
}

export function getTasks () {
  return fetch('/api/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function getTask (slug) {
  return fetch(`http://localhost:8000/api/tasks/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function addTask (body) {
  return fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}
