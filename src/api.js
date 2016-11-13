import 'whatwg-fetch'
import btoa from 'btoa-lite'
import { stringify } from 'query-string'

const DEFAULT_API_URL = 'https://api.github.com'
const METHODS_WITH_NO_BODY = ['GET', 'HEAD', 'DELETE']

class BaseGitHubApi {
  constructor (config = {}) {
    const { token, username, password, rootUrl = DEFAULT_API_URL, headers = {} } = config
    this._rootUrl = rootUrl
    this._headers = headers

    if (token) {
      this._headers.authorization = `token ${token}`
    } else if (config.username && config.password) {
      const basicAuth = btoa(`${username}:${password}`)
      this._headers.authorization = `Basic ${basicAuth}`
    }
  }

  doRequest (url, options = {}) {
    const { query, body, method = 'GET' } = options
    const headers = this._headers
    let apiUrl = `${url}`

    if (apiUrl.indexOf('?') === -1 && query) {
      apiUrl = `${apiUrl}?${stringify(query)}`
    }

    if (apiUrl.indexOf('//') === -1) {
      apiUrl = `${this._rootUrl}${apiUrl}`
    }

    const fetchConfig = { headers, method }

    if (METHODS_WITH_NO_BODY.indexOf(method) === -1 && body) {
      fetchConfig.body = body
    }

    return fetch(apiUrl, fetchConfig)
  }
}

export default BaseGitHubApi
