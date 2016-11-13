import Client from './client'
import PullRequests from './pulls'
import Repositories from './repos'
import PageLinks from './paging'

export default function (config) {
  return new Client(config, {
    PullRequests,
    Repositories,
    PageLinks
  })
}
