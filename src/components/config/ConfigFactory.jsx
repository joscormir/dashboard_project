import { LocalStorageGithubAccessTokenRepository } from '../../infrastructure/LocalStorageGithubAccessTokenRepository'
import { Config } from './Config'

const repository = new LocalStorageGithubAccessTokenRepository()

export function ConfigFactory() {
  return <Config repository={repository} />
}
