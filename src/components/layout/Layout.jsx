import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'
import TopBarProgressByLocation from './TopBarProgressByLocation'
import TopBarProgress from 'react-topbar-progress-indicator'

TopBarProgress.config({
  barColors: {
    0: '#fff',
    '1.0': '#1a2233',
  },
  shadowBlur: 5,
})
export function Layout() {
  return (
    <>
      <TopBarProgressByLocation />
      <header className={styles.header__container}>
        <div className={styles.brand__container}>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <h1 className={styles.app__brand}>Github Repo Dashboard</h1>
          </Link>
        </div>
        <Link to="/config" style={{ textDecoration: 'none' }}>
          <span>⚙️</span>
        </Link>
      </header>
      <Outlet />
    </>
  )
}
