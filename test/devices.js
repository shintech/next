const nock = require('nock')
const chai = require('chai')
const chaiHttp = require('chai-http')
const { URL } = require('url')

const environment = process.env['NODE_ENV']
const port = process.env['PORT'] || 8000

const logger = require('../server/logger')({ environment })
const server = require('../server')({ logger, environment, port })

const devicesURL = new URL(process.env['DEVICES_URL'])

chai.use(chaiHttp)
const expect = chai.expect

describe('DEVICES', function () {
  beforeEach(function () {
    let fakeResponse = {
      '_shards': {
        'failed': 0,
        'skipped': 0,
        'successful': 5,
        'total': 5
      },
      'hits': {
        'hits': [
          {
            '_id': 'XUixzGUBeTXQsbSWlJbO',
            '_index': 'inventory',
            '_score': null,
            '_source': {
              'facility': '102',
              'manufacturer': 'apple',
              'model': 'ipad',
              'serial': '1234'
            },
            '_type': 'device',
            'sort': [
              'XUixzGUBeTXQsbSWlJbO'
            ]
          }
        ],

        'max_score': null,
        'total': 4
      },
      'timed_out': false,
      'took': 0
    }

    nock(devicesURL.href)
      .get('/api/inventory')
      .reply(200, fakeResponse)

      .get('/api/search')
      .query({
        slug: '123'
      })

      .reply(200, fakeResponse)
  })

  it('GET /api/inventory', done => {
    chai.request(server)
      .get('/api/inventory')
      .end(function (err, res) {
          expect(err).to.be.null // eslint-disable-line
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('hits')
        expect(res.body['hits'].hits.length).to.be.at.least(1)
        done()
      })
  })

  it('GET /api/search', done => {
    chai.request(server)
      .get('/api/search')
      .query({ slug: '123' })
      .end(function (error, res) { // eslint-disable-line
        expect(error).to.be.null // eslint-disable-line
        expect(res.body).to.have.property('hits')
        expect(res.body['hits'].hits[0]).to.have.property('_id')
        done()
      })
  })
})
