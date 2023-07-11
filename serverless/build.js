#!/usr/bin/env node

const execSh = require('exec-sh').promise;
(async function main() {
  // deleting existing dist folder
  await runCmd('rm -rf serverless/dist');

  // create a dist folder
  await runCmd('mkdir -p serverless/dist');

  // copy build output from .next to dist folder
  await runCmd('cp -r .next/standalone/ serverless/dist/');

  // create a static folder inside dist/.next folder
  await runCmd('mkdir -p serverless/dist/.next/static');

  // copy only media files (we need this as it will be used by next image)
  await runCmd('cp -r .next/static/media serverless/dist/.next/static/');

  async function runCmd(cmd) {
    console.log('\n' + cmd);
    await execSh(cmd);
  }
})();
