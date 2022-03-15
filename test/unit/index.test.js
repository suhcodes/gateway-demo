import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import GatewayService from '../../src'

chai.use(sinonChai)

describe('GatewayService', () => {
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

  describe('Smoke Tests', () => {
    it('SHOULD be a class', () => {
      expect(instance).to.be.an.instanceof(GatewayService)
    })
    it('SHOULD contain cards Object', () => {
      expect(instance.cards).to.be.an.instanceof(Object)
    })
    it('SHOULD contain auth Object', () => {
      expect(instance.auth).to.be.an.instanceof(Object)
    })
    it('SHOULD have static method getInstance', () => {
      expect(GatewayService.getInstance).to.be.an.instanceof(Function)
    })
  })

  describe('GatewayService Singleton', () => {
    it('GIVEN new instance of GatewayService env should be equal to DEVELOPMENT', () => {
      const serviceInstance = new GatewayService(options)
      expect(serviceInstance.env).to.be.equal(options.env)
      expect(serviceInstance.url).to.be.equal(options.url)
    })
  })

  describe('getInstance()', () => {
    it('SHOULD return env as PRODUCTION', () => {
      expect(GatewayService.getInstance().env).to.be.equal(options.env)
      expect(GatewayService.getInstance().url).to.be.equal(options.url)
    })
  })

  describe('paramSerializer', () => {
    it('SHOULD return QUERY PARAMS', () => {
      const body = {
        email: 'test+mail@my-vue-demo.com',
        password: 'F.Lgc2m;*>JBPc.x'
      }
      const bodyQueryParam = '?email=test%2Bmail%40my-vue-demo.com&password=F.Lgc2m%3B*%3EJBPc.x'
      expect(GatewayService.getInstance().paramSerializer(body)).to.be.equal(bodyQueryParam)
    })
  })
})
