import Cookies from 'js-cookie'

/**
 * @memberof auth
 * @module createToken
 * @function
 * @returns {Promise} Create Token
 */

export function createToken (body) {
  return this.request.post(`${this.url}/login`, body)
    .then((res) => {
      return res
    })
    .catch((err) => {
      throw err
    })
}
