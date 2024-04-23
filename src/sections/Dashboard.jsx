import { githubApiResponses } from '../github_api_responses'
import styles from './Dashboard.module.scss'
import Lock from '../assets/icons/lock.svg?react'
import UnLock from '../assets/icons/unlock.svg?react'
import Check from '../assets/icons/check.svg?react'
import Error from '../assets/icons/error.svg?react'
import PullRequest from '../assets/icons/git-pull-request.svg?react'
import Star from '../assets/icons/star.svg?react'
import Watcher from '../assets/icons/watchers.svg?react'
import Fork from '../assets/icons/repo-forked.svg?react'
import Issue from '../assets/icons/issue-opened.svg?react'

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

function isoDateFormat(date) {
  const dateFormatted = new Date(date)
  const today = new Date()

  if (today.getFullYear() - dateFormatted.getFullYear() > 0) {
    console.log(today.getFullYear() - dateFormatted.getFullYear())
    return `${today.getFullYear() - dateFormatted.getFullYear()} years ago`
  } else if (today.getMonth() - dateFormatted.getMonth() > 0) {
    return `${today.getMonth() - dateFormatted.getMonth()} months ago`
  } else if (today.getDay() - dateFormatted.getDay() > 0) {
    return `${today.getDay() - dateFormatted.getDay()} days ago`
  } else {
    return 'today'
  }
}

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
                <Star />
                {repo.repositoryData.stargazers_count}
              </div>
              <div className={styles.widget__stat}>
                <Watcher />
                {repo.repositoryData.watchers_count}
              </div>
              <div className={styles.widget__stat}>
                <PullRequest />
                {repo.pullRequest.length}
              </div>
              <div className={styles.widget__stat}>
                <Fork />
                {repo.repositoryData.forks_count}
              </div>
              <div className={styles.widget__stat}>
                <Issue />
                {repo.repositoryData.open_issues_count}
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  )
}
