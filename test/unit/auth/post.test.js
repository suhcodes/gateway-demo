import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import FireworksService from '../../../src'
var chaiAsPromised = require('chai-as-promised')

chai.use(sinonChai)
chai.use(chaiAsPromised)

describe('Create Token', () => {
  let instance, postStub
  const options = {
    env: 'production',
    url: 'dev.local.fireworkscrm.net'
  }

  beforeEach(() => {
    instance = new FireworksService(options)
    postStub = sinon.stub(instance.request, 'post')
  })

  afterEach(() => {
    instance = null
    postStub.restore()
  })

  describe('createToken', () => {
    const body = {
      email: 'test+mail@fire-engine-red.com',
      password: 'F.Lgc2m;*>JBPc.x'
    }
    it('SHOULD call request.post once', () => {
      instance.auth.createToken(body)
      expect(postStub).to.be.calledWith(`${instance.url}/login`, body)
    })
  })
})
