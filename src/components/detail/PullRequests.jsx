import { useGitHubRepositoryPullRequests } from '../../hooks/useGitHubRepositoryPullRequests'
import { PullRequestsSkeleton } from './PullRequestsSkeleton'
import styles from './WidgetDetail.module.scss'
export function PullRequests({ repository, repositoryId }) {
  const { pullRequests, isLoading } = useGitHubRepositoryPullRequests(
    repository,
    repositoryId,
  )
  if (isLoading) {
    return <PullRequestsSkeleton />
  }
  return (
    <>
      <h3>Pull Requests</h3>
      <table className={styles.detail__table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            pullRequests.map((pullRequest) => {
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
              )
            })}
        </tbody>
      </table>
    </>
  )
}
