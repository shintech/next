const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('about', '/about')
routes.add('sandbox', '/sandbox')
routes.add('post', '/blog/:slug')
