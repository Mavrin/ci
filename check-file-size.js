const fs = require('fs')
const {assert} = require('chai')
it('should bandle less than threshold', function () {
  const stats = fs.statSync('./cool-module.js')
  const thresholdFileSize = require('./package.json').thresholdFileSize
  const fileSizeInBytes = stats.size
  assert.isBelow(fileSizeInBytes, thresholdFileSize)
})
