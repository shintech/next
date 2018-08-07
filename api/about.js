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
      'work on loading component',
      'try to make loading animation for d3 graphs',
      'write some tests',
      'upload and process files',
      'download files',
      'authentication',
      'more graphs'
    ],

    references: [
      { url: 'https://github.com/zeit/next.js', title: 'https://github.com/zeit/next.js' },
      { url: 'https://github.com/timberio/next-go/', title: 'https://github.com/timberio/next-go/' }
    ]
  }
}
