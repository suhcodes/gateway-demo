import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import FireworksService from '../../../src'

chai.use(sinonChai)

describe('Auth', () => {
  let instance
  const options = {
    env: 'production',
    url: 'dev.local.fireworkscrm.net'
  }

  beforeEach(() => {
    instance = new FireworksService(options)
  })

  afterEach(() => {
    instance = null
  })

  describe('Smoke Test', () => {
    it('SHOULD contain auth.createToken Function', () => {
      expect(instance.auth.createToken).to.be.instanceof(Function)
    })
  })
})
