#!/usr/bin/env node

const fs = require("fs");

/**
 * Forms a prerelease version name based on the branch name and commit SHA
 */
function getVersionPreid() {
  const branchName = process.env.BRANCH_NAME;
  const commitSHA = process.env.COMMIT_SHA;

  // Find the last occurrence of the '/' character
  const index = branchName.lastIndexOf("/");
  let finalPrName = branchName.replaceAll("_", "-");
  // If the character was found, return the substring after it
  if (index !== -1) {
    finalPrName = branchName.substring(index + 1);
  }

  const version_preid = `${finalPrName}-${commitSHA.substring(0, 10)}`;
  fs.writeFileSync(process.env.GITHUB_OUTPUT, `version_preid=${version_preid}`);
}

getVersionPreid();
