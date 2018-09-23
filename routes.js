const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('new', '/posts/new')
routes.add('post', '/blog/:slug')
