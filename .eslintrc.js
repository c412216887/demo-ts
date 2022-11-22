/*
 * @LastEditors: chenlu chenlu0917boy@163.com
 * @Date: 2022-11-18 17:44:44
 * @LastEditTime: 2022-11-18 18:58:45
 * @FilePath: \demo-ts\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    quotes: [2, "double"],
    "import/extensions": [1, "never"],
    "import/no-unresolved": 0,
  },
};
