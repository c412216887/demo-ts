/*
 * @LastEditors: chenlu chenlu0917boy@163.com
 * @Date: 2022-11-18 17:57:15
 * @LastEditTime: 2022-11-18 18:49:30
 * @FilePath: \demo-ts\preinstall.js
 */
const process = require("node:process");

if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn("\u001b[33mThis repository requires using pnpm as the package manager "
    + " for scripts to work properly.\u001b[39m\n");
  process.exit(1);
}
