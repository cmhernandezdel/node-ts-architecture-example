import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "<rootDir>/__tests__/coverage/",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75
    }
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/coverage", "<rootDir>/__tests__/integration/setup.ts"],
  setupFiles: ["<rootDir>/__tests__/integration/setup.ts"],
  randomize: true,
  roots: ["<rootDir>/__tests__/", "<rootDir>/src"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  }
};

export default config;