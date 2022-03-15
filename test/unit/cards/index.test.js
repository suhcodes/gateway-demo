import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import GatewayService from '../../../src'

chai.use(sinonChai)

describe('Cards', () => {
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
    it('SHOULD contain cards.getCards Function', () => {
      expect(instance.cards.getCards).to.be.instanceof(Function)
    })
  })
})
