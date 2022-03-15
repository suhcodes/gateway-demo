import Cookies from 'js-cookie'

export function verifyAuth (config, token) {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

export function requestInterceptor (config) {
  const token = Cookies.get(`fw-tk_${this.env}`)
  const request = verifyAuth(config, token)
  return request
}

export function errorRequestInterceptor (error) {
  const body = {
    type: 'request',
    status: error.request.status,
    message: error.message,
    stack: error.stack
  }
  return Promise.reject(body)
}

export function responseInterceptor (response) {
  return response.data
}

export function errorResponseInterceptor (error) {
  const baseResponse = {
    type: 'response',
    message: error.message,
    status: error && error.response ? error.response.status : null,
    stack: error.stack,
    body: error && error.response ? error.response.data : null
  }

  return Promise.reject(baseResponse)
}
