import nextJest from "next/jest.js";

const jestConfig = async () => {
  const createJestConfig = nextJest({
    dir: "./",
  });

  const customJestConfig = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  };

  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    transformIgnorePatterns: [
      "<rootDir>/node_modules/(?!.pnpm/photoswipe).+\\.js$",
    ],
  };
};

export default jestConfig;
