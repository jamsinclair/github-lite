import Client from './client'
import Branches from './branches'
import Issues from './issues'
import PullRequests from './pulls'
import Repositories from './repos'
import PageLinks from './paging'

export default function (config) {
  return new Client(config, {
    Branches,
    Issues,
    PullRequests,
    Repositories,
    PageLinks
  })
}
