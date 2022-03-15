import auth from './auth'
import cards from './cards'
import request from './support'

let GatewayInstance = null
export default class GatewayService {
  constructor (options) {
    this.options = options
    this.request = request
    this.env = options.env
    this.url = options.url
    this.auth = auth.bind(this)()
    this.cards = cards.bind(this)()

    if (!GatewayInstance) {
      GatewayInstance = this
    }
    return GatewayInstance
  }

  static getInstance (options) {
    if (!GatewayInstance) {
      GatewayInstance = new GatewayService(options)
    }
    return GatewayInstance
  }

  paramSerializer (params = {}) {
    const queryParams = Object.entries(params)
    if (queryParams.length > 0) {
      return `?${new URLSearchParams(queryParams)}`
    }
    return queryParams
  }
}
