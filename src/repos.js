import BaseGitHubApi from './api'

class RepositoriesApi extends BaseGitHubApi {
  list(user, params) {
    const apiRoute = user ? `/users/${user}/repos` : '/user/repos'
    return this.doRequest(apiRoute, { query: params })
  }

  listByOrg(org, params) {
    return this.doRequest(`/orgs/${org}/repos`, { query: params })
  }

  getCombinedStatus(owner, repo, ref) {
    return this.doRequest(`/repos/${owner}/${repo}/commits/${ref}/status`)
  }
}

export default RepositoriesApi
