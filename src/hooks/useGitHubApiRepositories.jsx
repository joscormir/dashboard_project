import { useState, useEffect } from 'react'
export function useGitHubApiRepositories({
  repository,
  repositoryUrls,
}) {
  const [repositoryData, setRepositoryData] = useState([])
  useEffect(() => {
    repository.search(repositoryUrls).then((repositoryData) => {
      setRepositoryData(repositoryData)
    })
  }, [repository, repositoryUrls])

  return { repositoryData }
}
