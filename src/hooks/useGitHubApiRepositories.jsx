import { useState, useEffect } from 'react'
export function useGitHubApiRepositories({
  repository,
  repositoryUrls,
}) {
  const [repositoryData, setRepositoryData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    repository.search(repositoryUrls).then((repositoryData) => {
      setRepositoryData(repositoryData)
      setIsLoading(false)
    })
  }, [repository, repositoryUrls])

  return { repositoryData , isLoading}
}
