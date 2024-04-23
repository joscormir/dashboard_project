import { githubApiResponses } from '../github_api_responses'
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

            <div className={styles.widget__body}>
              <div className={styles.widget__status}>
                <p>
                  Last update {isoDateFormat(repo.repositoryData.updated_at)}{' '}
                </p>
                {repo.CiStatus.workflow_runs.length > 0 && (
                  <div>
                    {repo.CiStatus.workflow_runs[0].status === 'completed' ? (
                      <Check />
                    ) : (
                      <Error />
                    )}
                  </div>
                )}
              </div>
              <p className={styles.widget__description}>
                {repo.repositoryData.description}
              </p>
            </div>

            <footer className={styles.widget__footer}>
              <div className={styles.widget__stat}>
                <Starred />
                {repo.repositoryData.stargazers_count}
              </div>
              <div className={styles.widget__stat}>
                <Watchers />
                {repo.repositoryData.watchers_count}
              </div>
              <div className={styles.widget__stat}>
                <PullsRequested />
                {repo.pullRequest.length}
              </div>
              <div className={styles.widget__stat}>
                <Forks />
                {repo.repositoryData.forks_count}
              </div>
              <div className={styles.widget__stat}>
                <IssuesOpened />
                {repo.repositoryData.open_issues_count}
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  )
}
