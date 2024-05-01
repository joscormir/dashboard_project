import { useGitHubRepositoryPullRequests } from '../../hooks/useGitHubRepositoryPullRequests'
import { PullRequestsSkeleton } from './PullRequestsSkeleton'
import styles from './WidgetDetail.module.scss'
export function PullRequests({ repository, repositoryId }) {
  const { pullRequests, isLoading } = useGitHubRepositoryPullRequests(
    repository,
    repositoryId,
  )
  if (pullRequests.length ===0 && isLoading) {
    return <PullRequestsSkeleton />
  }
  return (
    
    <>
      <h3>Pull Requests</h3>
      {!isLoading && pullRequests.length !==0 ? (
      <table className={styles.detail__table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          
            {pullRequests.map((pullRequest) => {
              return (
                <tr key={pullRequest.id}>
                  <td>{pullRequest.title}</td>
                  <td>
                    {new Date(pullRequest.created_at).toLocaleDateString(
                      'es-ES',
                    )}
                  </td>
                  <td>{pullRequest.state}</td>
                </tr>
              )}
            )}
        </tbody>
      </table>):(<h4>No pull requests</h4>)}
    </>
  )
}
