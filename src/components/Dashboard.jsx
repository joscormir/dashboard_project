import styles from './Dashboard.module.scss'  
import { Widget } from './Widget'
import { ErrorWidget } from './ErrorWidget'
import { useGitHubApiRepositories } from '../hooks/useGitHubApiRepositories'
import { DashboardConfig } from '../dashboard_project_config'

const repositoryUrls = DashboardConfig.widgets.map((widget)=>widget.repository_url)

export function Dashboard({repository}) {
  const {repositoryData} = useGitHubApiRepositories({repository, repositoryUrls })
    
  return (
    <>
      <header className={styles.header__container}>
        <h1>Github Repo Dashboard</h1>
      </header>
      {repositoryData.length === 0 ? (
        <ErrorWidget />
      ) : (
        <section className={styles.container}>
          {repositoryData.map((repo) => (
              <Widget
                key={repo.repositoryData.id}
                repositoryData={repo.repositoryData}
                pullRequests={repo.pullRequests}
                ciStatus={repo.ciStatus}
              />
            
          ))}
        </section>
      )}
    </>
  )
}
