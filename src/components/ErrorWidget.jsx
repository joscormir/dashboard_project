import styles from './ErrorWidget.module.scss'

export function ErrorWidget() {
  return (
    <>
      <section className={styles.empty}>
        <span>No configured widgets</span>
      </section>
    </>
  )
}
