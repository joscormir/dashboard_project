export class GitHubAPIGitHubRepositoryRepository {
  #endpoints = [
    'https://api.github.com/repos/$owner/$name',
    'https://api.github.com/repos/$owner/$name/pulls',
    'https://api.github.com/repos/$owner/$name/actions/runs',//?page=1&per_page=10
  ]


  constructor(personalAccessToken) {this.personalAccessToken = personalAccessToken}
  
  async search(repositoryUrls) {
    const responsePromises = repositoryUrls
      .map((url) => this.#urlToId(url))
      .map((id) => this.#searchBy(id))
    return Promise.all(responsePromises)
  }
  async byId(repositoryId){
    return this.#searchBy(repositoryId)
  }

  async #searchBy(repositoryId) {
    const RepositoryRequests = this.#endpoints
      .map((endpoint) =>endpoint.replace('$owner', repositoryId.owner))
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
      owner: splitUrl.pop(),
    }
  }
}
