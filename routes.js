const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('about', '/about')
routes.add('sandbox', '/sandbox')
routes.add('new', '/posts/new')
routes.add('search', '/search')
routes.add('post', '/blog/:slug')
