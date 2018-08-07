module.exports = function (options) {
  const { db } = options

  return {
    fatchAll: async function (req, res) {
      let response, status

      try {
        response = await db.any('SELECT * from todo')
        status = 200
      } catch (err) {
        response = { error: err.message || err }
        status = (err.constructor.name === 'QueryResultError') ? 404 : 500

        console.error(response.error)
      }

      res.status(status)
        .format({
          json: () => {
            res.write(JSON.stringify(response))

            res.end()
          }
        })
    },

    fetchOne: async function (req, res) {
      const postId = parseInt(req.params.id)

      const post = await db.one('SELECT * from todo WHERE id = $1', postId)

      res.status(200).json(post)
    }
  }
}
