import { githubApiResponses } from '../github_api_responses'
import Lock from '../assets/icons/lock.svg?react'
import UnLock from '../assets/icons/unlock.svg?react'
import styles from './Dashboard.module.scss'


/*async function onCLickgetRepo() {
  const octokit = new Octokit({
    auth: DashboardConfig['github_access_token'],
  })
  const response = await octokit.request(
    'GET /repos/{owner}/{repo}/issues/{issue_number}',
    {
      owner: 'github',
      repo: 'docs',
      issue_number: 11901,
      headers: {
        'x-github-api-version': '2022-11-28',
      },
    },
  )
  console.log(response.data)
}*/

export function Dashboard() {
  return (
    <>
      <header className={styles.header}>
        <h1>Github Repo Dashboard</h1>
      </header>
      <section className={styles.container}>
        {githubApiResponses.map((repo) => (
          <article className={styles.widget} key={repo.repositoryData.id}>
            <header className={styles.widget__header}>
              <a
                className={styles.widget__title}
                href={repo.repositoryData.html_url}
                target="blank"
                title={`${repo.repositoryData.organization.login}/${repo.repositoryData.name}`}
              >
                {repo.repositoryData.organization.login}/
                {repo.repositoryData.name}
              </a>
              {repo.repositoryData.private ? <Lock /> : <UnLock />}
            </header>
            <section></section>
            <footer></footer>
          </article>
        ))}
      </section>
    </>
  )
}
