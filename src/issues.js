import BaseGitHubApi from './api'

class IssuesApi extends BaseGitHubApi {
  list(params) {
    return this.doRequest(`/issues`, { query: params })
  }

  listForOrg(org, params) {
    return this.doRequest(`/orgs/${org}/issues`, { query: params })
  }

  listForRepo(owner, repo, params) {
    return this.doRequest(`/repos/${owner}/${repo}/issues`, { query: params })
  }
}

export default IssuesApi
