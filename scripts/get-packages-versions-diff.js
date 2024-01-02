#!/usr/bin/env node

/**
 * Get packages versions diff - packages that were updated since last release
 */
function getPackagesVersionsDiff() {
  console.log("### getPackagesVersionsDiff");
  let package_version_before_release = JSON.parse(process.env.PACKAGES_VERSIONS_BEFORE_RELEASE);
  let package_version_after_release = JSON.parse(process.env.PACKAGES_VERSIONS_AFTER_RELEASE);

  console.log("### getPackagesVersionsDiff package_version_before_release", package_version_before_release);
  console.log("### getPackagesVersionsDiff package_version_after_release", package_version_after_release);

  const fs = require("fs");
  const path = require("path");
  const PACKAGES_PATH = path.join(__dirname, "../packages");

  const packages_versions_diff = {};

  fs.readdirSync(PACKAGES_PATH).forEach(packageName => {
    if (package_version_before_release[packageName] !== package_version_after_release[packageName]) {
      packages_versions_diff[packageName] = package_version_after_release[packageName];
    }
  });

  console.log("### getPackagesVersionsDiff packages_versions_diff", packages_versions_diff);

  fs.writeFileSync(process.env.GITHUB_OUTPUT, `packages_versions_diff=${JSON.stringify(packages_versions_diff)}`);
  return packages_versions_diff;
}

getPackagesVersionsDiff();
