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
      Cookies.set(`fw-tk_${this.env}`, res.token, createCookie())
      return res
    })
    .catch((err) => {
      throw err
    })
}

/**
 * @memberof auth
 * @module createCookie
 * @function
 * @returns {Promise} Create Cookie
 */

export function createCookie (res) {
  const path = '/'
  const domain = this.url
  const today = new Date()
  const expires = today.getTime() + (res.expires_in * 1000)
  return { path, domain, expires }
}
