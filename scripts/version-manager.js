const fs = require('fs');
const path = require('path');

// Read current version from version file or create if doesn't exist
function getCurrentVersion() {
    const versionFile = path.join(__dirname, 'current-version.txt');
    try {
        if (fs.existsSync(versionFile)) {
            const version = parseInt(fs.readFileSync(versionFile, 'utf8'));
            return version;
        }
    } catch (err) {
        console.error('Error reading version file:', err);
    }
    return 0;
}

// Save new version
function saveVersion(version) {
    const versionFile = path.join(__dirname, 'current-version.txt');
    try {
        fs.writeFileSync(versionFile, version.toString());
    } catch (err) {
        console.error('Error writing version file:', err);
    }
}

// Get next version and update the file
function getNextVersion() {
    const currentVersion = getCurrentVersion();
    const nextVersion = currentVersion + 1;
    saveVersion(nextVersion);
    return nextVersion.toString().padStart(3, '0');
}

// Format version string
function formatVersion() {
    return `ver1.${getNextVersion()}`;
}

console.log(formatVersion()); 