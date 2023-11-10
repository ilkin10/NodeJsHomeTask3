const os = require('os');
const fs = require('fs');
const path = require('path');

const osType = os.type();
const osArch = os.arch();
const tempDir = os.tmpdir();

const format = `${osType.toLowerCase()}_${osArch.toLowerCase()}_temp`;

const p = path.join(tempDir, format);

if (!fs.existsSync(p)) {
  fs.mkdir(p);
  console.log(`Temp directory => '${format}'`);
} else {
  console.log(`Temp directory => '${format}'`);
}
