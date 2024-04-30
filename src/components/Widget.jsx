import styles from './Widget.module.scss'
import Lock from '../assets/icons/lock.svg'
import UnLock from '../assets/icons/unlock.svg'
import Check from '../assets/icons/check.svg'
import Error from '../assets/icons/error.svg'
import PullsRequested from '../assets/icons/git-pull-request.svg'
import Starred from '../assets/icons/star.svg'
import Watchers from '../assets/icons/watchers.svg'
import Forks from '../assets/icons/repo-forked.svg'
import IssuesOpened from '../assets/icons/issue-opened.svg'
import { isoDateFormat } from '../services/isoDateFormat'
import { Link } from 'react-router-dom'

export function Widget({ repositoryData, pullRequests, ciStatus }) {
  return (
    <article className={styles.widget} key={repositoryData.id}>
      <header className={styles.widget__header}>
        <h2 className={styles.widget__title}>
          <Link
            to={`/repository/${repositoryData.organization.login}/${repositoryData.name}`}
          >
            {repositoryData.organization.login}/{repositoryData.name}
          </Link>
        </h2>
        {repositoryData.private ? <Lock /> : <UnLock />}
      </header>

      <div className={styles.widget__body}>
        <div className={styles.widget__status}>
          <p>Last update {isoDateFormat(repositoryData.updated_at)} </p>
          {ciStatus.workflow_runs.length > 0 && (
            <div>
              {ciStatus.workflow_runs[0].status === 'completed' ? (
                <Check />
              ) : (
                <Error />
              )}
            </div>
          )}
        </div>
        <p className={styles.widget__description}>
          {repositoryData.description}
        </p>
      </div>

      <footer className={styles.widget__footer}>
        <div className={styles.widget__stat}>
          <Starred />
          {repositoryData.stargazers_count}
        </div>
        <div className={styles.widget__stat}>
          <Watchers />
          {repositoryData.watchers_count}
        </div>
        <div className={styles.widget__stat}>
          <PullsRequested />
          {pullRequests.length}
        </div>
        <div className={styles.widget__stat}>
          <Forks />
          {repositoryData.forks_count}
        </div>
        <div className={styles.widget__stat}>
          <IssuesOpened />
          {repositoryData.open_issues_count}
        </div>
      </footer>
    </article>
  )
}
