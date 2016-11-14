import BaseGitHubApi from './api'

class RepositoriesApi extends BaseGitHubApi {
  list(params) {
    return this.doRequest('/users/repos', { query: params })
  }

  listByUser(user, params) {
    return this.doRequest(`/users/${user}/repos`, { query: params })
  }

  listByOrg(org, params) {
    return this.doRequest(`/orgs/${org}/repos`, { query: params })
  }

  getCombinedStatus(owner, repo, ref) {
    return this.doRequest(`/repos/${owner}/${repo}/commits/${ref}/status`)
  }
}

export default RepositoriesApi
