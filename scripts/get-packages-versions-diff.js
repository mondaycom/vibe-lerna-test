/**
 * Get packages versions diff - packages that were updated since last release
 */
function getPackagesVersionsDiff() {
  const package_version_before_release = process.env.package_version_before_release;
  const package_version_after_release = process.env.package_version_after_release;

  const fs = require("fs");
  const path = require("path");
  const PACKAGES_PATH = path.join(__dirname, "../packages");

  const packageVersionsDiff = {};

  fs.readdirSync(PACKAGES_PATH).forEach(packageName => {
    if (package_version_before_release[packageName] !== package_version_after_release[packageName]) {
      packageVersionsDiff[packageName] = package_version_after_release[packageName];
    }
  });

  console.log(packageVersionsDiff);
  return packageVersionsDiff;
}

getPackagesVersionsDiff();
