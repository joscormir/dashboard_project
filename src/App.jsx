import { GitHubAPIGitHubRepositoryRepository } from './infrastructure/GitHubAPIGitHubRepositoryRepository'
import { Dashboard } from './components/Dashboard'
import { DashboardConfig } from './dashboard_project_config'

const repository = new GitHubAPIGitHubRepositoryRepository(DashboardConfig['github_access_token'])

function App() {
  return <Dashboard repository={repository}/>
}

export default App
