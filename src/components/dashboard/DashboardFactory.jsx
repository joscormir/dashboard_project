import { Dashboard } from './Dashboard'
import { GitHubAPIGitHubRepositoryRepository } from '../../infrastructure/GitHubAPIGitHubRepositoryRepository'
import { useWidgetContext } from '../widget/WidgetContextProvider'
import { LocalStorageGithubAccessTokenRepository } from '../../infrastructure/LocalStorageGithubAccessTokenRepository'
import { GithubAccessTokenSearcher } from '../config/GithubAccessTokenSearcher'

const ghAccessTokenRepository = new LocalStorageGithubAccessTokenRepository()
const ghAccessTokenSearcher = new GithubAccessTokenSearcher(
  ghAccessTokenRepository,
)
const repository = new GitHubAPIGitHubRepositoryRepository(
  ghAccessTokenSearcher.search(),
)

export function DashboardFatory() {
  const { repositoryWidgets } = useWidgetContext()
  return (
    <Dashboard repository={repository} repositoryWidgets={repositoryWidgets} />
  )
}
