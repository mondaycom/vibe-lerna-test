#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Get packages versions diff - packages that were updated since last release
 */
function getPackagesVersionsDiff() {
  let package_version_before_release = JSON.parse(process.env.PACKAGES_VERSIONS_BEFORE_RELEASE);
  let package_version_after_release = JSON.parse(process.env.PACKAGES_VERSIONS_AFTER_RELEASE);

  const PACKAGES_PATH = path.join(__dirname, "../packages");

  const packages_versions_diff = {};

  fs.readdirSync(PACKAGES_PATH).forEach(packageName => {
    if (package_version_before_release[packageName] !== package_version_after_release[packageName]) {
      packages_versions_diff[packageName] = package_version_after_release[packageName];
    }
  });

  fs.writeFileSync(process.env.GITHUB_OUTPUT, `packages_versions_diff=${JSON.stringify(packages_versions_diff)}`);
}

getPackagesVersionsDiff();
