import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai'
import FireworksService from '../../src'

chai.use(sinonChai)

describe('FireworksService', () => {
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

  describe('Smoke Tests', () => {
    it('SHOULD be a class', () => {
      expect(instance).to.be.an.instanceof(FireworksService)
    })
    it('SHOULD contain auth Object', () => {
      expect(instance.auth).to.be.an.instanceof(Object)
    })
    it('SHOULD have static method getInstance', () => {
      expect(FireworksService.getInstance).to.be.an.instanceof(Function)
    })
  })

  describe('FireworksService Singleton', () => {
    it('GIVEN new instance of FireworksService env should be equal to DEVELOPMENT', () => {
      const serviceInstance = new FireworksService(options)
      expect(serviceInstance.env).to.be.equal(options.env)
      expect(serviceInstance.url).to.be.equal(options.url)
    })
  })

  describe('getInstance()', () => {
    it('SHOULD return env as PRODUCTION', () => {
      expect(FireworksService.getInstance().env).to.be.equal(options.env)
      expect(FireworksService.getInstance().url).to.be.equal(options.url)
    })
  })

  describe('paramSerializer', () => {
    it('SHOULD return QUERY PARAMS', () => {
      const body = {
        email: 'test+mail@fire-engine-red.com',
        password: 'F.Lgc2m;*>JBPc.x'
      }
      const bodyQueryParam = '?email=test%2Bmail%40fire-engine-red.com&password=F.Lgc2m%3B*%3EJBPc.x'
      expect(FireworksService.getInstance().paramSerializer(body)).to.be.equal(bodyQueryParam)
    })
  })
})
