import { Octokit } from 'octokit'
import { DashboardConfig } from '../dashboard_project_config'

async function onCLickgetRepo() {
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
  console.log(`The status of the response is: ${response.status}`)
  console.log(`The request URL was: ${response.url}`)
  console.log(
    `The x-ratelimit-remaining response header is: ${response.headers['x-ratelimit-remaining']}`,
  )
  console.log(`The issue title is: ${response.data.title}`)
}


export function Dashboard() {
  return (
    <>
      <div>
        <h1>Hello, World! </h1>
        <button onClick={onCLickgetRepo}>Get Repo</button>
      </div>
    </>
  )
}
