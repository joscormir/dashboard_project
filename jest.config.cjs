module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  testMatch: ['<rootDir>/tests/**/*.(test).(js|jsx)'],
  testPathIgnorePatterns: ['<rootDir>/tests/e2e/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'ecmascript',
            jsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },
}
