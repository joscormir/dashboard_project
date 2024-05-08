import { WidgetDetail } from './WidgetDetail'
import { GitHubAPIGitHubRepositoryRepository } from '../../infrastructure/GitHubAPIGitHubRepositoryRepository'
import { LocalStorageGithubAccessTokenRepository } from '../../infrastructure/LocalStorageGithubAccessTokenRepository'
import { GithubAccessTokenSearcher } from '../config/GithubAccessTokenSearcher'

const ghAccessTokenRepository = new LocalStorageGithubAccessTokenRepository()
const ghAccessTokenSearcher = new GithubAccessTokenSearcher(
  ghAccessTokenRepository,
)
const repository = new GitHubAPIGitHubRepositoryRepository(
  ghAccessTokenSearcher.search(),
)

export class WidgetDetailFactory {
  static create() {
    return <WidgetDetail repository={repository} />
  }
}
