import jsRules from "./lib/jsRules";
import reactRules from "./lib/reactRules";
import importRules from "./lib/importRules";

export default {
  ignorePatterns: ["node_modules", "dist"],
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
