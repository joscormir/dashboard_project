import { useParams } from 'react-router-dom'
import { useGitHubRepository } from '../../hooks/useGitHubRepository'
import { useMemo } from 'react'
import styles from './WidgetDetail.module.scss'
import Lock from '../../assets/icons/lock.svg'
import UnLock from '../../assets/icons/unlock.svg'
import { WidgetDetailSkeleton } from './WidgetDetailSkeleton'
import { PullRequests } from './PullRequests'
import { useInView } from 'react-intersection-observer'

export function WidgetDetail({ repository }) {
  const { owner, name } = useParams()
  const repositoryId = useMemo(
    () => ({ name, owner }),
    [name, owner],
  )
  const { repositoryData } = useGitHubRepository(repository, repositoryId)

  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  })

  if (!repositoryData) {
    return <WidgetDetailSkeleton />
  }
  
  return (
    <>
      <section className={styles['repository-detail']}>
        <header className={styles.header}>
          <a
            href={repositoryData.repositoryData.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className={styles.header__title}>
              {repositoryData.repositoryData.owner.login}/
              {repositoryData.repositoryData.name}
            </h2>
          </a>
          {repositoryData.repositoryData.private ? <Lock /> : <UnLock />}
        </header>

        <p>{repositoryData.repositoryData.description}</p>

        <h3>Repository stats</h3>
        <table className={styles.detail__table}>
          <thead>
            <tr>
              <th>Stars</th>
              <th>Watchers</th>
              <th>Forks</th>
              <th>Issues</th>
              <th>Pull Requests</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{repositoryData.repositoryData.stargazers_count}</td>
              <td>{repositoryData.repositoryData.watchers_count}</td>
              <td>{repositoryData.repositoryData.forks_count}</td>
              <td>{repositoryData.repositoryData.open_issues_count}</td>
              <td>{repositoryData.pullRequests.length}</td>
            </tr>
          </tbody>
        </table>

        <h3>Workflow runs status</h3>
        {repositoryData.ciStatus.workflow_runs.length === 0 ? (
          <h4>No workflow runs</h4>
        ) : (
          <table className={styles.detail__table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Date</th>
                <th>Status</th>
                <th>Conclusion</th>
              </tr>
            </thead>
            <tbody>
              {repositoryData.ciStatus.workflow_runs.map((run) => {
                return (
                  <tr key={run.id}>
                    <td>{run.name}</td>
                    <td>
                      <a href={run.html_url} target="_blank" rel="noreferrer">
                        {run.display_title}
                      </a>
                    </td>
                    <td>
                      {new Date(run.created_at).toLocaleDateString('es-ES')}
                    </td>
                    <td>{run.status}</td>
                    <td>{run.conclusion}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}

        <section ref={ref} className={styles['repository-detail']}>
          {inView && (
            <PullRequests repository={repository} repositoryId={repositoryId} />
          )}
        </section>
      </section>
    </>
  )
}
