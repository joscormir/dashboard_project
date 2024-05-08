import { DashboardConfig } from '../../dashboard_project_config'

export class GithubAccessTokenSearcher {
  constructor(ghAccessTokenRepository) {
    this.repository = ghAccessTokenRepository
  }
  search() {
    const token = this.repository.search()
    return token || DashboardConfig['github_access_token']
  }
}
