import { useParams } from 'react-router-dom'
import { useGitHubRepository } from '../../hooks/useGitHubRepository'
import { useMemo } from 'react'

export function WidgetDetail({ repository }) {
  const { organization, name } = useParams()
  const repositoryId = useMemo(
    () => ({ name, organization }),
    [name, organization],
  )
  const { repositoryData } = useGitHubRepository(repository, repositoryId)
  
  return <span>{repositoryData.repositoryData?.url}</span>
}
