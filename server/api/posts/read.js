module.exports = function (options) {
  const { db } = options

  return {
    fatchAll: async function (req, res) {
      let posts = await db.any('SELECT * from posts')

      res.status(200).json(posts)
    },

    fetchOne: async function (req, res) {
      const postId = parseInt(req.params.id)

      const post = await db.one('SELECT * from posts WHERE id = $1', postId)

      res.status(200).json(post)
    }
  }
}
