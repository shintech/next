var Datastore = require('nedb')

let db = {}

db.about = new Datastore({ filename: 'server/data/about.db', autoload: true })
db.contact = new Datastore({ filename: 'server/data/contact.db', autoload: true })

db.about.insert({
  summary: [
    { details: 'Next' },
    { details: 'React' },
    { details: 'Redux' },
    { details: 'Express' },
    { details: 'Next' },
    { details: 'PostgreSQL' },
    { details: 'd3' }
  ],
  description: {
    paragraph: 'Universal JavaScript application built with Next.js and Express.js',
    usage: {
      development: './install.sh\nnpm run dev',
      production: 'docker-compose build && docker-compose up -d'
    }
  },
  tasks: [
    { details: 'work on loading component' },
    { details: 'try to make loading animation for d3 graphs' },
    { details: 'write some test' },
    { details: 'upload and process files' },
    { details: 'download files' },
    { details: 'authentication' },
    { details: 'more graph' },
    { details: 'pass some initial data as an argument to next' }
  ],
  links: [
    { title: 'home', details: 'List of data fetched from /api/post' },
    { title: 'about', details: 'Details about the application' },
    { title: 'contact', details: 'Information about github or other accounts' }
  ],

  sandboxLinks: [
    { title: 'Redux Increment', details: 'dispatches redux action INCREMENT.' },
    { title: 'Bar Graph', details: 'Bar Graph made using d3.' },
    { title: 'Upload File', details: 'Upload a file.' },
    { title: 'FlexBox', details: 'CSS FlexBox demonstration.' }
  ],

  references: [
    { url: 'https://github.com/zeit/next.js', title: 'https://github.com/zeit/next.js' },
    { url: 'https://github.com/timberio/next-go/', title: 'https://github.com/timberio/next-go/' }
  ]
})

db.contact.insert({
  references: [
    { url: 'https://github.com/mprather1', title: 'mprather1' },
    { url: 'https://github.com/shintech', title: 'shintech' },
    { url: 'https://github.com/shintech/next', title: 'shintech/next' }
  ]
})
