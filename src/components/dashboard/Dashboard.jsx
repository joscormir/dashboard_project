import styles from './Dashboard.module.scss'
import { Widget } from '../widget/Widget'
import { ErrorWidget } from '../widget/ErrorWidget'
import { useGitHubApiRepositories } from '../../hooks/useGitHubApiRepositories'
import { DashboardConfig } from '../../dashboard_project_config'
import { WidgetsSkeleton } from '../widget/WidgetSkeleton'
import { AddWidgetForm } from '../widget/AddWidgetForm'

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
      {isLoading ? (
        <section className={styles.container}>
          <WidgetsSkeleton numberOfWidgets={repositoryUrls.length} />
        </section>
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
          <AddWidgetForm />
        </section>
      )}
      {!isLoading && repositoryData.length === 0 && <ErrorWidget />}
    </>
  )
}
