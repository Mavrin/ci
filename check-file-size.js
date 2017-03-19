const fs = require('fs') //Load the filesystem module
const stats = fs.statSync('./cool-module.js')
const thresholdFileSize = require('./package.json').thresholdFileSize
const fileSizeInBytes = stats.size
if (fileSizeInBytes > thresholdFileSize) {
  console.error(`Size of bundle is huge. Expected ${thresholdFileSize} but actual ${fileSizeInBytes}`)
  process.exit(1)
}
process.exit(0)
