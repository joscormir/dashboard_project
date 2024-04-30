import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import PullsRequested from '../assets/icons/git-pull-request.svg'
import Starred from '../assets/icons/star.svg'
import Watchers from '../assets/icons/watchers.svg'
import Forks from '../assets/icons/repo-forked.svg'
import IssuesOpened from '../assets/icons/issue-opened.svg'
import styles from './Widget.module.scss'

function WidgetSkeleton() {
  return (
    <article className={styles.widget}>
      <header
        className={styles.widget__header}
        style={{
          display: 'block',
          paddingTop: '1.15rem',
          paddingBottom: '1.15rem',
        }}
      >
        <Skeleton baseColor="#FFFFFF" highlightColor="#3CD5FF" width="70%" />
      </header>
      <div className={styles.widget__body}>
        <p 
        style={{ marginTop: '1rem', marginBottom: '2rem' }}
        >
          Last update <Skeleton inline={true} width="20%" />
        </p>
        <p
          className={styles.widget__description}
          style={{ paddingBottom: '0.65rem' }}
        >
          <Skeleton height={28} />
        </p>
      </div>
      <footer className={styles.widget__footer}>
        <div className={styles.widget__stat}>
          <Starred />
          <span>
            <Skeleton width={35} />
          </span>
        </div>
        <div className={styles.widget__stat}>
          <Watchers />
          <span>
            <Skeleton width={25} />
          </span>
        </div>
        <div className={styles.widget__stat}>
          <Forks />
          <span>
            <Skeleton width={15} />
          </span>
        </div>
        <div className={styles.widget__stat}>
          <IssuesOpened />
          <span>
            <Skeleton width={15} />
          </span>
        </div>
        <div className={styles.widget__stat}>
          <PullsRequested />
          <span>
            <Skeleton width={15} />
          </span>
        </div>
      </footer>
    </article>
  )
}

export function WidgetsSkeleton({ numberOfWidgets }) {
  return (
    <SkeletonTheme baseColor="#1A2233" highlightColor="#535966">
      {[...new Array(numberOfWidgets)].map((_, i) => (
        <WidgetSkeleton key={i} />
      ))}
    </SkeletonTheme>
  )
}
