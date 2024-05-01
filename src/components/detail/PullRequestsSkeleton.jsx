import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from './WidgetDetail.module.scss'
export function PullRequestsSkeleton() {
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
          <tr>
            <td>
              {' '}
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
              {' '}
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
    </>
  )
}
