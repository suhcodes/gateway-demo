import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import GatewayService from '../../../src'

chai.use(sinonChai)

describe('Auth', () => {
  let instance
  const options = {
    env: 'production',
    url: 'my-vue-demo.com'
  }

  beforeEach(() => {
    instance = new GatewayService(options)
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
