'use strict'

import expect from './common'

import BaseGitHubApi from '../src/api'

describe('BaseGitHubApi', function () {
  it('should return a valid api instance without config', () => {
    const api = new BaseGitHubApi()
    expect(api).to.be.an.instanceOf(BaseGitHubApi)
  })

  describe('#doRequest', function () {
    describe('without authentication', function () {
      it('should be able to make requests to public api', () => {
        const apiEndpoint = '/zen'
        const api = new BaseGitHubApi()

        const promise = api.doRequest(apiEndpoint)

        return promise.then((res) => {
          expect(res).to.be.an.object
          expect(res).to.have.property('status')
          expect(res.status).to.equal(200)
        })
      })
    })
  })
})
