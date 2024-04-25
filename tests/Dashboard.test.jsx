import { githubApiResponses } from '../src/github_api_responses'
import { GitHubAPIGitHubRepositoryRepository } from '../src/infrastructure/GitHubAPIGitHubRepositoryRepository'
import { Dashboard } from '../src/sections/Dashboard'
import { render } from '@testing-library/react'
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

const mockRepository = GitHubAPIGitHubRepositoryRepository

describe('Dasshboard section', () => {
  it('show all widgets', async () => {
    mockRepository.mockImplementationOnce(() => {
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

    render(<Dashboard />)
  })
})
