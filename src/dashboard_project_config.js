export const DashboardConfig = {
  // VITE_ prefix important to use variables from .env
  github_access_token: import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN,
  
  widgets: [
    {
      id: 'f07af66f-2a7f-4dcb-95f3-c52aef149e8c',
      repository_url: 'https://github.com/CodelyTV/dotly',
    },
    {
      id: '07afcd94-39fc-4355-816c-46618c58a910',
      repository_url: 'https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture',
    },
    {
      id: '2d4ab41d-6ee6-49a7-b7b4-b0a2ca145b00',
      repository_url: 'https://github.com/CodelyTV/refactoring-code-smells',
    },
  ],
}
