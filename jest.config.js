module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  roots: ['test'],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node',
  // testRegex: '(/test/.*|(\\.|/)(test|spec))\\.tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true
};
