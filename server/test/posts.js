/* eslint-env mocha  */

const nock = require('nock')
const chai = require('chai')
const chaiHttp = require('chai-http')
const { URL } = require('url')

const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000

const logger = require('../../server/logger')({ environment })
const server = require('../../server')({ logger, environment, port })

const postsURL = new URL(process.env['POSTS_URL'])

chai.use(chaiHttp)
const expect = chai.expect

describe('POSTS', function () {
  beforeEach(function () {
    let fakeResponse = [
      {
        _id: '5b9eeda95744c570b3689035',
        title: 'possimus molestiae mollitia',
        body: 'Architecto nesciunt quidem. Modi ut a aut. Nobis est occaecati quia vitae officia sed adipisci ab odio. Aut enim et. Qui et error ipsum atque ut molestiae reprehenderit dolorum explicabo. Repudiandae dolor fugit non.\n \rEst sapiente voluptatem nihil et magnam et. Quis non et iure. Minima perspiciatis ducimus ab quo aliquid. Fuga molestias et cupiditate nesciunt qui possimus. Delectus asperiores nisi ut dolores ab rerum. Minima vero sit blanditiis impedit et.\n \rEt occaecati est rem quasi. Repellat aut consequatur aut. Quo quas assumenda voluptas cum placeat nam deserunt id. In sed in. Nisi pariatur accusamus animi sequi.',
        summary: 'Labore ipsum sed maxime qui iusto voluptatem quia.'
      }
    ]

    nock(postsURL.href)
      .get('/api/posts')
      .reply(200, fakeResponse)

      .get('/api/posts/5b9eeda95744c570b3689035')
      .reply(200, fakeResponse[0])

      .post('/api/posts')
      .reply(200)
  })

  it('GET /api/posts', done => {
    chai.request(server)
      .get('/api/posts')
      .end(function (err, res) {
          expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        expect(res.body[0]).to.have.property('_id')
        expect(res.body[0]).to.have.property('title')
        expect(res.body[0]).to.have.property('summary')
        expect(res.body[0]).to.have.property('body')
        done()
      })
  })

  it('GET /api/posts/:id', done => {
    chai.request(server)
      .get('/api/posts')
      .end(function (error, response) { // eslint-disable-line
        expect(error).to.be.null // eslint-disable-line
        chai.request(server)
          .get(`/api/posts/${response.body[0]._id}`)
          .end(function (err, res) {
            expect(err).to.be.null // eslint-disable-line
            expect(res).to.have.status(200)
            expect(res.body).to.have.property('_id')
            expect(res.body).to.have.property('title')
            expect(res.body).to.have.property('summary')
            expect(res.body).to.have.property('body')
            done()
          })
      })
  })

  it('POST /api/post', done => {
    chai.request(server)
      .post('/api/posts')
      .send({ title: 'title', summary: 'summary', body: 'body' })
      .end(function (err, res) {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        done()
      })
  })
})
