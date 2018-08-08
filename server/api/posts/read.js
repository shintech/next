module.exports = function ({ db, logger }) {
  return {
    fatchAll: async function (req, res) {
      let response, status

      try {
        response = await db.any('SELECT * from posts')
        status = 200
      } catch (err) {
        response = { error: err.message || err }
        status = (err.constructor.name === 'QueryResultError') ? 404 : 500

        logger.error(response.error)
      }

      res.status(status)
        .format({
          json: () => {
            res.write(JSON.stringify(response))
            res.flush()
            res.end()
          }
        })
    },

    fetchOne: async function (req, res) {
      const postId = parseInt(req.params.id)

      const post = await db.one('SELECT * from posts WHERE id = $1', postId)

      res.status(200).json(post)
    }
  }
}
