import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import GatewayService from '../../../src'
var chaiAsPromised = require('chai-as-promised')

chai.use(sinonChai)
chai.use(chaiAsPromised)

describe('Get Cards', () => {
  let instance, postStub
  const options = {
    env: 'production',
    url: 'my-vue-demo.com'
  }

  beforeEach(() => {
    instance = new GatewayService(options)
    postStub = sinon.stub(instance.request, 'post')
  })

  afterEach(() => {
    instance = null
    postStub.restore()
  })

  describe('getCards', () => {
    it('SHOULD call get once', () => {
      instance.cards.getCards(body)
      expect(postStub).to.be.calledWith()
    })
  })
})
