#!/usr/bin/env node

/**
 * Get packages versions diff - packages that were updated since last release
 */
function getPackagesVersionsDiff() {
  const package_version_before_release = process.env.package_version_before_release;
  const package_version_after_release = process.env.package_version_after_release;

  const fs = require("fs");
  const path = require("path");
  const PACKAGES_PATH = path.join(__dirname, "../packages");

  const packagesVersionsDiff = {};

  fs.readdirSync(PACKAGES_PATH).forEach(packageName => {
    if (package_version_before_release[packageName] !== package_version_after_release[packageName]) {
      packagesVersionsDiff[packageName] = package_version_after_release[packageName];
    }
  });

  console.log(packagesVersionsDiff);
  fs.writeFileSync(process.env.GITHUB_OUTPUT, `packages_versions_diff=${packagesVersionsDiff}`);
  return packagesVersionsDiff;
}

getPackagesVersionsDiff();
