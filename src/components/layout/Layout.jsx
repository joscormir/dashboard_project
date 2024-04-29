import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

export function Layout(){
return (
    <>
    <header className={styles.header__container}>
        <h1>Github Repo Dashboard</h1>
      </header>
      <Outlet />
      </>
)
}