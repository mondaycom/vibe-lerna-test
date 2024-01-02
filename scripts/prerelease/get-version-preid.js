#!/usr/bin/env node

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

  const versionPreid = `${finalPrName}-${commitSHA.substring(0, 10)}`;
  console.log(versionPreid);
  return versionPreid;
}

getVersionPreid();
