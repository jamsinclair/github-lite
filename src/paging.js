import BaseGitHubApi from './api'

function getPageLinks (link) {
  const links = {}
  if (typeof link != 'string') {
    return links
  }

  link.replace(/<([^>]*)>;\s*rel="([\w]*)\"/g, (m, uri, type) => {
    links[type] = uri
  })
  return links
}

function getPageUrl (link, which) {
  const url = getPageLinks(link)[which]
  return url ? Promise.resolve(url) : Promise.reject(`No ${which} page link found`)
}

class PageLinksApi extends BaseGitHubApi {
  hasNext (link) {
    return getPageLinks(link).next
  }

  getNext (link) {
    return getPageUrl(link, 'next')
      .then(url => this.doRequest(url))
  }

  hasPrev (link) {
    return getPageLinks(link).prev
  }

  getPrev (link) {
    return getPageUrl(link, 'prev')
      .then(url => this.doRequest(url))
  }

  hasFirst (link) {
    return getPageLinks(link).first
  }

  getFirst (link) {
    return getPageUrl(link, 'first')
      .then(url => this.doRequest(url))
  }

  hasLast (link) {
    return getPageLinks(link).last
  }

  getLast (link) {
    return getPageUrl(link, 'last')
      .then(url => this.doRequest(url))
  }
}

export default PageLinksApi
