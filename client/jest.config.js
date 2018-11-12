module.exports = {
  verbose: true,
  notify: true,
  testMatch: ['**/*.+(test|spec).js'],
  coverageDirectory: 'test/results/coverage/jest',
  coverageReporters: ['html'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!src/index.js',
    '!src/setupStore.js',
    '!src/store/congigureStore.js',
    '!**/*.story.js',
    '!**/*.flow.js',
    '!**/*.spec.js',
    '!**/*.test.js',
    '!**/*.defs.js'
  ],
  coverageThreshold: {
    './src/components/atoms': {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    },
    './src/helpers': {
      statements: 99.86,
      branches: 99.0,
      functions: 100,
      lines: 100
    },
    './src/assets': {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    },
    global: {
      statements: 82,
      branches: 73,
      lines: 82,
      functions: 75
    }
  },
  testEnvironment: 'jsdom',
  testURL: 'http://www.example.com/',
  setupFiles: [],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  }
};
