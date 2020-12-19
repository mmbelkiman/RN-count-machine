module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: [
    './jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'test-coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 10,
      lines: 10,
      statements: 0,
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
  rootDir: './',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
