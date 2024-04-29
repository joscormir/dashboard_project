import { WidgetDetail } from "./WidgetDetail";
import { DashboardConfig } from '../../dashboard_project_config'
import { GitHubAPIGitHubRepositoryRepository } from '../../infrastructure/GitHubAPIGitHubRepositoryRepository'

const repository = new GitHubAPIGitHubRepositoryRepository(DashboardConfig['github_access_token'])

export class WidgetDetailFactory{
    static create(){
        return <WidgetDetail repository={repository} />
    }
}