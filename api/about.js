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

    description: 'Universal JavaScript application built with Next.js and Express.js',

    links: [
      { title: 'home', details: 'List of data fetched from /api/post' },
      { title: 'about', details: 'Details about the application' },
      { title: 'contact', details: 'Information about github or other accounts' }
    ],

    sandbox: [
      { title: 'increment', details: 'dispatches redux action INCREMENT' },
      { title: 'd3', details: 'button currently uses d3 to change background color' }
    ],

    todos: [
      { details: 'make about and contact pages dynamic - possibly retrieve data from or just display readme file' },
      { details: 'create readme file' },
      { details: 'write some tests' }
    ],

    references: [
      { url: 'https://github.com/zeit/next.js' },
      { url: 'https://github.com/timberio/next-go/' }
    ]
  }
}