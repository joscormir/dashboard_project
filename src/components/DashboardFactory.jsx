import { Dashboard } from './Dashboard'
import { DashboardConfig } from '../dashboard_project_config'
import { GitHubAPIGitHubRepositoryRepository } from '../infrastructure/GitHubAPIGitHubRepositoryRepository'

const repository = new GitHubAPIGitHubRepositoryRepository(DashboardConfig['github_access_token'])

export class DashboardFatory{
    static create(){
        return <Dashboard repository={repository} />
    }

}