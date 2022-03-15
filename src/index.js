import auth from './auth'
import request from './support'

let FireworksInstance = null
export default class FireworksService {
  constructor (options) {
    this.options = options
    this.request = request
    this.env = options.env
    this.url = options.url
    this.auth = auth.bind(this)()

    if (!FireworksInstance) {
      FireworksInstance = this
    }
    return FireworksInstance
  }

  static getInstance (options) {
    if (!FireworksInstance) {
      FireworksInstance = new FireworksService(options)
    }
    return FireworksInstance
  }

  paramSerializer (params = {}) {
    const queryParams = Object.entries(params)
    if (queryParams.length > 0) {
      return `?${new URLSearchParams(queryParams)}`
    }
    return queryParams
  }
}
