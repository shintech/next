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

    createTask: async function (req, res) {
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
    },

    removeTask: async function (req, res) {
      let response, message

      try {
        response = await Task.deleteOne({ _id: req.params._id })
        message = (response === 1) ? 'ok' : 'not found'
      } catch (err) {
        logger.error(err.message)
        message(err.message)
      }

      res.status(200)
        .format({
          json: () => {
            res.write(JSON.stringify({message}))
            res.end()
          }
        })
    }
  }
}
