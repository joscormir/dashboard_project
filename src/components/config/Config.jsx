import { useSaveConfig } from '../../hooks/useSaveConfig'
import styles from './Config.module.scss'
export function Config({ repository }) {
  const { save } = useSaveConfig(repository)
  const submitForm = async (ev) => {
    ev.preventDefault()
    const { ghAccessToken } = ev.target.elements
    save(ghAccessToken.value)

    window.location.href = '/'
  }
  return (
    <section className={styles.config}>
      <h2>Configuration</h2>
      <p>
        ⚙️ Here you can configure your GitHub Access Token in order to allow{' '}
        <i>Github Repo Dashboard</i> to fetch all the data for the
        Github repositories.
      </p>
      <p>
        You can have more information on how to obtain your token {' '}
        <a
          target="_blank"
          href="https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"
          rel="noreferrer"
        >
          here
        </a>
      </p>

      <form className={styles.form} onSubmit={submitForm}>
        <label htmlFor="ghAccessToken">GitHub Access Token</label>
        <input id="ghAccessToken" name="ghAccessToken" type="text" />

        <input type="submit" value="Save" />
      </form>
    </section>
  )
}
