import BaseGitHubApi from './api'

class PullRequestsApi extends BaseGitHubApi {
  list(owner, repo, params) {
    return this.doRequest(`/repos/${owner}/${repo}/pulls`, { query: params })
  }
}

export default PullRequestsApi
