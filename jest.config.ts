export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '\\.(png)$': '<rootDir>/src/tests/utils/image-mock.ts',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@elements(.*)$': '<rootDir>/src/elements$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@state(.*)$': '<rootDir>/src/state$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.app.json',
      },
    ],
  },
};
