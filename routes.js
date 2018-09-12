const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('about', '/about')
routes.add('sandbox', '/sandbox')
routes.add('new', '/new')
routes.add('search', '/search')
routes.add('post', '/blog/:slug')
