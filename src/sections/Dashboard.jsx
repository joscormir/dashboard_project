import { DashboardConfig } from "../dashboard_project_config"



export function Dashboard() {
  const API = DashboardConfig['github_access_token']
  console.log(API,'this is the GITHUB API')
  return (
    <>
      <div>
        <h1>Hello, World! </h1>
        <h2>{API}</h2>
      </div>
    </>
  )
}
