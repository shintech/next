module.exports = function (options) {
  const { db } = options

  return async function (req, res) {
    /* eslint-disable */

    let response, status
  
    try {
      response = await db.one('insert into posts(title, short, body)' + 'values( ${title}, ${short}, ${body} ) returning id, title, short, body', req.body) 
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
      
    /* eslint-enable */
  }
}
