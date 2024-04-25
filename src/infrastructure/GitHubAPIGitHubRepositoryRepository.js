export class GitHubAPIGitHubRepositoryRepository {
  #endpoints = [
    'https://api.github.com/repos/$organization/$name',
    'https://api.github.com/repos/$organization/$name/pulls',
    'https://api.github.com/repos/$organization/$name/actions/runs?page=1&per_page=1',
  ]

  constructor(personalAccessToken) {this.personalAccessToken = personalAccessToken}
  
  async search(repositoryUrls) {
    const responsePromises = repositoryUrls
      .map((url) => this.#urlToId(url))
      .map((id) => this.#searchBy(id))
    return Promise.all(responsePromises)
  }

  async #searchBy(repositoryId) {
    const RepositoryRequests = this.#endpoints
      .map((endpoint) =>endpoint.replace('$organization', repositoryId.organization))
      .map((endpoint) => endpoint.replace('$name', repositoryId.name))
      .map((url) =>
        fetch(url, {
          headers: { Authorization: `Bearer ${this.personalAccessToken}` }
        })
      )
      const responses = await Promise.all(RepositoryRequests)

    const [repositoryData, pullRequests, ciStatus] = await Promise.all(responses.map((response) => response.json()))
    return {
      repositoryData: repositoryData,
      pullRequests: pullRequests,
      ciStatus: ciStatus,
    }
  }
  
  #urlToId(url) {
    const splitUrl = url.split('/')
    return {
      name: splitUrl.pop(),
      organization: splitUrl.pop(),
    }
  }
}
