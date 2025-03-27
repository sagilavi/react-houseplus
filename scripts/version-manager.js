const fs = require('fs');
const path = require('path');

// Path to store the version number
const versionFile = path.join(__dirname, 'version.txt');

// Get current version or start from 9999 (so first build will be 10000)
function getCurrentVersion() {
    try {
        if (fs.existsSync(versionFile)) {
            return parseInt(fs.readFileSync(versionFile, 'utf8'));
        }
    } catch (err) {
        console.error('Error reading version:', err);
    }
    return 9999; // Start from 9999 so first increment will be 10000
}

// Save new version
function saveVersion(version) {
    try {
        fs.writeFileSync(versionFile, version.toString());
    } catch (err) {
        console.error('Error saving version:', err);
    }
}

// Get and increment version
const currentVersion = getCurrentVersion();
const newVersion = currentVersion + 1;
saveVersion(newVersion);

// Output the new version
console.log(newVersion); 