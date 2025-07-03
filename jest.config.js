module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  moduleFileExtensions: ["ts", "js"],
  setupFilesAfterEnv: ['./setupTest.ts'],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
