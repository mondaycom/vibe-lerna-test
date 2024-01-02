#!/usr/bin/env node

const fs = require("fs");

/**
 * Create a comment body for a PR that contains a prerelease version of monorepo packages.
 */
function createPrereleaseCommentBody() {
  const packages_versions_diff = JSON.parse(process.env.PACKAGES_VERSIONS_DIFF);
  let comment_body = "";

  for (const package_name in packages_versions_diff) {
    const new_version = packages_versions_diff[package_name];
    comment_body += `A new prerelease version of this PR has been published: \`${package_name}@${new_version}\`\n`;
    comment_body += `To install this prerelease version using npm, please run the following command in your terminal:\n`;
    comment_body += `\`npm i ${package_name}@${new_version}\`\n`;
    comment_body += `If you are using Yarn, you can use the following command instead:\n`;
    comment_body += `\`yarn add ${package_name}@${new_version}\`\n\n`;
  }

  console.log("### createPrereleaseCommentBody, result comment_body", comment_body);
  fs.writeFileSync(process.env.GITHUB_OUTPUT, `comment_body=${JSON.stringify(comment_body)}`);
}

createPrereleaseCommentBody();
