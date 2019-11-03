module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  roots: ['dist/test'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node'
};
