/**
 * Get current package versions from package.json files for all packages in packages folder
 */
function getCurrentPackageVersions() {
  const fs = require("fs");
  const path = require("path");
  const PACKAGES_PATH = path.join(__dirname, "../packages");

  const packageVersions = {};

  Object.keys(fs.readdirSync(PACKAGES_PATH)).forEach(packageName => {
    const packageJson = require(path.join(PACKAGES_PATH, packageName, "package.json"));
    packageVersions[packageName] = packageJson.version;
  });

  console.log(packageVersions);
  return packageVersions;
}

getCurrentPackageVersions();
