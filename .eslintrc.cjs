module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "plugin:storybook/recommended", "plugin:react/jsx-runtime", "prettier", "plugin:storybook/recommended"],
  rules: {
    "no-restricted-imports": ["error", {
      patterns: ["@/features/*/*"]
    }],
    "linebreak-style": ["error", "windows"],
    "@typescript-eslint/no-var-requires": "off"
  },
  overrides: [{
    files: ["*.test.{ts,tsx}", "src/testing/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off"
    }
  }]
};