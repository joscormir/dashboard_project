import styles from './Dashboard.module.scss'
import { GitHubAPIGitHubRepositoryRepository } from '../infrastructure/GitHubAPIGitHubRepositoryRepository'
import { DashboardConfig } from '../dashboard_project_config'
import { useState, useEffect } from 'react'
import { Widget } from './Widget'
import { ErrorWidget } from './ErrorWidget'

export function Dashboard() {
  const [GitHubApiResponse, setGitHubApiResponse] = useState([])

  useEffect(() => {
    /*  repository is defined inside the effect so the first time it is rendered
    this variable might be updated 
    */
    const repository = new GitHubAPIGitHubRepositoryRepository(
      DashboardConfig.github_access_token,
    )

    repository
      .search(DashboardConfig.widgets.map((widget) => widget.repository_url))
      .then((responses) => {
        setGitHubApiResponse(responses)
      })
  }, [])

  return (
    <>
      <header className={styles.header__container}>
        <h1>Github Repo Dashboard</h1>
      </header>
      {GitHubApiResponse.length === 0 ? (
        <ErrorWidget />
      ) : (
        <section className={styles.container}>
          {GitHubApiResponse.map((repo) => (
            <article className={styles.widget} key={repo.repositoryData.id}>
              <Widget
                repositoryData={repo.repositoryData}
                pullRequests={repo.pullRequests}
                ciStatus={repo.ciStatus}
              />
            </article>
          ))}
        </section>
      )}
    </>
  )
}
