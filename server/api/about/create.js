module.exports = function ({ db, logger }) {
  return async function (req, res) {
    /* eslint-disable */
    let response, status
  
    try {
      response = await db.one('insert into tasks(title, details)' + 'values( ${title},${details} ) returning id, title, details', req.body) 
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

          res.end()
        }
      })
      
    /* eslint-enable */
  }
}