import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  coverageDirectory: "__tests__/coverage",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75
    }
  },
  randomize: true,
  roots: ["<rootDir>/__tests__/", "<rootDir>/src"],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  }
};

export default config;