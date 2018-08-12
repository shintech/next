module.exports = function ({ db, logger }) {
  return {
    fatchAll: async function (req, res) {
      let accounts = await db.any('SELECT * FROM accounts')

      res.status(200)
        .format({
          json: () => {
            res.write(JSON.stringify(accounts))
            res.end()
          }
        })
    }
  }
}
