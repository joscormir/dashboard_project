import styles from './Dashboard.module.scss'
import { Widget } from './Widget'
import { ErrorWidget } from './ErrorWidget'
import { useGitHubApiRepositories } from '../hooks/useGitHubApiRepositories'
import { DashboardConfig } from '../dashboard_project_config'
import { WidgetsSkeleton } from './WidgetSkeleton'
const repositoryUrls = DashboardConfig.widgets.map(
  (widget) => widget.repository_url,
)

export function Dashboard({ repository }) {
  const { repositoryData, isLoading } = useGitHubApiRepositories({
    repository,
    repositoryUrls,
  })

  return (
    <>
      {isLoading && (
        
        <section className={styles.container}>
          <WidgetsSkeleton numberOfWidgets={repositoryUrls.length} />
        </section>
      )}
      {!isLoading && repositoryData.length === 0 ? (
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
