export default {
  testEnvironment: "node",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js)$": "babel-jest",
  },
};
