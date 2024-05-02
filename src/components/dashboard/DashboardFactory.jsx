import { Dashboard } from './Dashboard'
import { DashboardConfig } from '../../dashboard_project_config'
import { GitHubAPIGitHubRepositoryRepository } from '../../infrastructure/GitHubAPIGitHubRepositoryRepository'
import { useWidgetContext } from '../widget/WidgetContextProvider'

const repository = new GitHubAPIGitHubRepositoryRepository(DashboardConfig['github_access_token'])

export function DashboardFatory(){
    const {repositoryWidgets} = useWidgetContext()
        return (
         <Dashboard repository={repository} repositoryWidgets={repositoryWidgets} />
        )

}