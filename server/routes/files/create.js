module.exports = ({ db, logger }) =>
  function (req, res) {
    res.status(200)
      .format({
        json: () => {
          res.write(JSON.stringify({
            status: 'ok',
            file: req.file.filename
          }))

          res.end()
        }
      })
  }
