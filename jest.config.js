module.exports = {
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "./", outputName: "junit.xml" }]
  ]
};

