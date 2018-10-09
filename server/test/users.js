/* eslint-env mocha  */

const nock = require('nock')
const chai = require('chai')
const chaiHttp = require('chai-http')
const { URL } = require('url')

const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000

const logger = require('../../server/logger')({ environment })
const server = require('../../server')({ logger, environment, port })

const usersURL = new URL(process.env['USERS_URL'])

chai.use(chaiHttp)
const expect = chai.expect

let loginResponse = (e, q) => {
  if (!q.username || q.username === '') { return { authorized: false } }
  const authorized = (q.password === 'password')

  return {
    authorized
  }
}

describe('USERS', function () {
  beforeEach(function () {
    let fakeResponse = [
      {
        _id: 1,
        first_name: 'first_name',
        last_name: 'last_name',
        username: 'username',
        password: 'password',
        email: 'email@example.org'
      }
    ]

    nock(usersURL.href)
      .get('/api/users')
      .reply(200, fakeResponse)

      .get('/api/users/1')
      .reply(200, fakeResponse[0])

      .post('/api/users')
      .reply(200)

      .post('/api/users/login')
      .reply(200, loginResponse)
  })

  it('GET /api/users', done => {
    chai.request(server).get('/api/users')
      .end(function (err, res) {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        done()
      })
  })

  it('GET /api/user/:id', done => {
    chai.request(server)
      .get('/api/users')
      .end(function (error, response) { // eslint-disable-line
        expect(error).to.be.null // eslint-disable-line
        chai.request(server)
          .get(`/api/users/${response.body[0]._id}`)
          .end(function (err, res) {
            expect(err).to.be.null // eslint-disable-line
            expect(res).to.have.status(200)
            done()
          })
      })
  })

  it('POST /api/user', done => {
    const attrs = {
      first_name: 'first_name',
      last_name: 'last_name',
      username: 'username',
      password: 'password',
      email: 'email@example.org'
    }

    chai.request(server)
      .post('/api/users')
      .send(attrs)
      .end(function (err, res) {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        done()
      })
  })

  it('POST /api/user/login -> Expect successful login...', done => {
    chai.request(server)
      .post('/api/users/login')
      .send({
        username: 'username',
        password: 'password'
      })
      .end((err, res) => {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('authorized')
        expect(res.body.authorized).to.be.true // eslint-disable-line
        done()
      })
  })

  it('POST /api/user/login -> Expect login failure with incorrect password...', done => {
    chai.request(server)
      .post('/api/users/login')
      .send({
        username: 'username',
        password: 'fail'
      })
      .end((err, res) => {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('authorized')
        expect(res.body.authorized).to.be.false // eslint-disable-line
        done()
      })
  })

  it('POST /api/user/login -> Expect login failure with no username...', done => {
    chai.request(server)
      .post('/api/users/login')
      .send({
        username: '',
        password: 'password'
      })
      .end((err, res) => {
        expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('authorized')
        expect(res.body.authorized).to.be.false // eslint-disable-line
        done()
      })
  })
})
