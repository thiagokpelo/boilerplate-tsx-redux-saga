module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts)$",
  setupFiles: [
    "<rootDir>/config/test-shim.js",
    "<rootDir>/config/setupTests.ts"
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  "collectCoverageFrom": [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/"
  ],
  "coveragePathIgnorePatterns": [
    "<rootDir>/node_modules"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": -10
    }
  },
};
