import axios from 'axios'
import {
  requestInterceptor,
  errorRequestInterceptor,
  responseInterceptor,
  errorResponseInterceptor
} from './interceptors'

axios.interceptors.request.use(requestInterceptor, errorRequestInterceptor)
axios.interceptors.response.use(responseInterceptor, errorResponseInterceptor)

const request = {
  get: endpoint => axios.get(endpoint).then(res => Promise.resolve(res)).catch(e => Promise.reject(e)),
  post: (endpoint, body) => axios.post(endpoint, body).then(res => Promise.resolve(res)).catch(e => Promise.reject(e)),
  delete: (endpoint, body) => axios.delete(endpoint, { data: body }).then(res => Promise.resolve(res)).catch(e => Promise.reject(e)),
  put: (endpoint, body) => axios.put(endpoint, body).then(res => Promise.resolve(res)).catch(e => Promise.reject(e)),
  patch: (endpoint, body) => axios.patch(endpoint, body).then(res => Promise.resolve(res)).catch(e => Promise.reject(e))
}

export default request
