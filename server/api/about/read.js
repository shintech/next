module.exports = function (options) {
  const { db } = options

  return {
    fatchAll: async function (req, res) {
      let response, status

      try {
        response = await db.any('SELECT * from tasks')
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
            res.flush()
            res.end()
          }
        })
    },

    fetchOne: async function (req, res) {
      const taskId = parseInt(req.params.id)

      const response = await db.one('SELECT * from tasks WHERE id = $1', taskId)

      res.status(200).json(response)
    }
  }
}
