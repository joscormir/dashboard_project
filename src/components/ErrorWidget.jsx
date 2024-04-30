import styles from './ErrorWidget.module.scss'

export function ErrorWidget() {
  return (
    <>
      <section className={styles.empty}>
        <h1>No configured widgets</h1>
      </section>
    </>
  )
}
