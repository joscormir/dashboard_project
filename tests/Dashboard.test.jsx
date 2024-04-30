import { githubApiResponses } from '../src/github_api_responses'
import { Dashboard } from '../src/components/Dashboard'
import { screen, render } from '@testing-library/react'
import { GitHubAPIGitHubRepositoryRepository } from '../src/infrastructure/GitHubAPIGitHubRepositoryRepository'
import { DashboardConfig } from '../src/dashboard_project_config'


jest.mock('../src/infrastructure/GitHubAPIGitHubRepositoryRepository')
/* TODO: This second mock to change the value of github_access_token from import.meta.env to ''
needs to be changed to something that is inherit from the DashBoardConfig not hard copied
in this file. Since the widget parameters might change, we need to make this mock callback 
parametric as well */
jest.mock('../src/dashboard_project_config', () => {
  return {
    DashboardConfig: {
      github_access_token: '',

      widgets: [
        {
          id: 'f07af66f-2a7f-4dcb-95f3-c52aef149e8c',
          repository_url: 'https://github.com/CodelyTV/dotly',
        },
        {
          id: '07afcd94-39fc-4355-816c-46618c58a910',
          repository_url:
            'https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture',
        },
        {
          id: '2d4ab41d-6ee6-49a7-b7b4-b0a2ca145b00',
          repository_url: 'https://github.com/CodelyTV/refactoring-code-smells',
        },
      ],
    },
  }
})

describe('Dasshboard section', () => {
  it('show all widgets', async () => {
    GitHubAPIGitHubRepositoryRepository.mockImplementationOnce(() => {
      return {
        search: () => Promise.resolve(githubApiResponses),
      }
    })
    /*
    Here the mock is perform so the search function returns
    all solved promises with the "gitHubApiResponses" values
    instead of the fetch. Since fetch is something related to
    the browser and not the app implementation we will override 
    it
    */
    // ARRANGE
    render(<Dashboard repository={new GitHubAPIGitHubRepositoryRepository(DashboardConfig['github_access_token'])}/>)
    // ACT

    const firstWidgetTitle = `${githubApiResponses[0].repositoryData.organization.login}/${githubApiResponses[0].repositoryData.name}`
    const firstWidgetHeader = await screen.findByRole('heading', {
      name: new RegExp(firstWidgetTitle, 'i'),
    })

    // ASSERT
    expect(firstWidgetHeader).toBeInTheDocument()
  })
  it('show not results message when there are no widgets', async () => {
    GitHubAPIGitHubRepositoryRepository.mockImplementationOnce(() => {
      return {
        search: () => Promise.resolve([]),
      }
    })
    // ARRANGE
    render(<Dashboard repository={new GitHubAPIGitHubRepositoryRepository(DashboardConfig['github_access_token'])}/>)
    // ACT
    const noResults = await screen.findByText(
      new RegExp('No configured widgets', 'i'),
    )
    // ASSERT
    expect(noResults).toBeInTheDocument()
  })
  it('show last modified date in human readable format', async () => {
  
    GitHubAPIGitHubRepositoryRepository.mockImplementationOnce(() => {
      return {
        search: () => Promise.resolve(githubApiResponses),
      }
    })
    // ARRANGE
    render(<Dashboard repository={new GitHubAPIGitHubRepositoryRepository(DashboardConfig['github_access_token'])}/>)

    // ACT
    const modificationDate = await screen.findByText(
      new RegExp('Last update today', 'i'),
    )
    // ASSERT
    expect(modificationDate).toBeInTheDocument()
  })
})
