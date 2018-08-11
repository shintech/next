const { Task } = require('../../schemas')

module.exports = function ({ db, logger }) {
  return {
    fatchAll: async function (req, res) {
      let response

      try {
        response = await Task.find()
      } catch (err) {
        logger.error(err.message)
        return res.send(err.message)
      }

      res.status(200)
        .format({
          json: () => {
            res.write(JSON.stringify(response))
            res.end()
          }
        })
    },

    createNew: async function (req, res) {
      let response

      try {
        response = Task.create({
          details: req.body.details
        })

        await response.save()
      } catch (err) {
        logger.error(err)
        res.send(err)
      }
      res.status(200)
        .format({
          json: () => {
            res.write(JSON.stringify(response))
            res.end()
          }
        })
    }
  }
}
