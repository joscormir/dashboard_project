import { useState, useEffect } from 'react'
export function useGitHubRepositoryPullRequests(repository, repositoryId ) {

  const [pullRequests, setpullRequests] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    repository.byId(repositoryId).then((repo) => {
      //Only loading pullRequests
      setpullRequests(repo.pullRequests)
      setIsLoading(false)
    })
  }, [repository, repositoryId])

  return { pullRequests, isLoading }
}
