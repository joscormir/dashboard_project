import { useEffect, useState } from 'react'

export function useGitHubRepository(repository, repositoryId) {
  const [repositoryData, setRepositoryData] = useState()
  useEffect(() => {
    
    repository.byId(repositoryId).then((repositoryData) => {
      setRepositoryData(repositoryData)
    })
  }, [repository, repositoryId])
  
  return {repositoryData}
}
