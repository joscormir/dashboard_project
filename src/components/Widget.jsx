import styles from './Dashboard.module.scss'
import Lock from '../assets/icons/lock.svg?react'
import UnLock from '../assets/icons/unlock.svg?react'
import Check from '../assets/icons/check.svg?react'
import Error from '../assets/icons/error.svg?react'
import PullsRequested from '../assets/icons/git-pull-request.svg?react'
import Starred from '../assets/icons/star.svg?react'
import Watchers from '../assets/icons/watchers.svg?react'
import Forks from '../assets/icons/repo-forked.svg?react'
import IssuesOpened from '../assets/icons/issue-opened.svg?react'
import { isoDateFormat } from '../services/isoDateFormat'

export function Widget({ repositoryData, pullRequests, ciStatus }) {
  return (
    <>
      <header className={styles.widget__header}>
        <a
          className={styles.widget__title}
          href={repositoryData.html_url}
          target="blank"
          title={`${repositoryData.organization.login}/${repositoryData.name}`}
        >
          {repositoryData.organization.login}/{repositoryData.name}
        </a>
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
    </>
  )
}
