const jsRules = require("./lib/jsRules");
const reactRules = require("./lib/reactRules");
const importRules = require("./lib/importRules");

module.exports = {
  ignorePatterns: ["node_modules", "dist", "build", "next"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["plugin:react/jsx-runtime", "next"],
  rules: {
    ...jsRules,
    ...reactRules,
    ...importRules,
  },
};
