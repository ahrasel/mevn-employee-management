module.exports = {
  preset: 'ts-jest',
  verbose: true,
  forceExit: true,
  resetModules: false,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['./node_modules/', './nuxt', './build/'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.ts', '**/*.test.js'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  setupFilesAfterEnv: ['./tests/setup.ts'],
  coveragePathIgnorePatterns: ['./server/tests/'],
}
