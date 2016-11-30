import BaseGitHubApi from './api'

class BranchesApi extends BaseGitHubApi {
  list(owner, repo, protectedBranch) {
    return this.doRequest(`/repos/${owner}/${repo}/branches`, { query: { protected: protectedBranch } })
  }

  getBranch(owner, repo, branch) {
    return this.doRequest(`/repos/${owner}/${repo}/branches/${branch}`)
  }
}

export default BranchesApi
