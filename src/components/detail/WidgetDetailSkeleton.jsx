import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './WidgetDetail.module.scss'

export function WidgetDetailSkeleton() {
  return (
    <section className={styles['repository-detail']}>
      <header
        className={styles.header}
        style={{
          display: 'block',
          paddingTop: '1.15rem',
          paddingBottom: '1.15rem',
        }}
      >
        <Skeleton baseColor="#3CD5FF" highlightColor="#FFFFFF" width="70%" />
      </header>

      <p>
        <Skeleton
          baseColor="#FFFFFF"
          highlightColor="#3CD5FF"
          inline={true}
          width="50%"
        />
      </p>

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
            <td>
              <Skeleton
                baseColor="#1A2233"
                highlightColor="#535966"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#1A2233"
                highlightColor="#535966"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#1A2233"
                highlightColor="#535966"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#1A2233"
                highlightColor="#535966"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#1A2233"
                highlightColor="#535966"
                inline={true}
                width="100%"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Workflow runs status</h3>
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
          <tr>
            <td>
              <Skeleton
                baseColor="#1A2233"
                highlightColor="#535966"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#1A2233"
                highlightColor="#535966"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#1A2233"
                highlightColor="#535966"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#1A2233"
                highlightColor="#535966"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#1A2233"
                highlightColor="#535966"
                inline={true}
                width="100%"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Skeleton
                baseColor="#FFFFFF"
                highlightColor="#3CD5FF"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#FFFFFF"
                highlightColor="#3CD5FF"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#FFFFFF"
                highlightColor="#3CD5FF"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#FFFFFF"
                highlightColor="#3CD5FF"
                inline={true}
                width="100%"
              />
            </td>
            <td>
              <Skeleton
                baseColor="#FFFFFF"
                highlightColor="#3CD5FF"
                inline={true}
                width="100%"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
