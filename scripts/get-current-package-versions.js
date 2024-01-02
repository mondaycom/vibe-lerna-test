#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Get current package versions from package.json files for all packages in packages folder
 */
function getCurrentPackageVersions() {
  const PACKAGES_PATH = path.join(__dirname, "../packages");
  const packagesVersions = {};

  fs.readdirSync(PACKAGES_PATH).forEach(packageName => {
    const packageJson = require(path.join(PACKAGES_PATH, packageName, "package.json"));
    packagesVersions[packageName] = packageJson.version;
  });

  fs.writeFileSync(process.env.GITHUB_OUTPUT, `packages_versions=${JSON.stringify(packagesVersions)}`);
}

getCurrentPackageVersions();
