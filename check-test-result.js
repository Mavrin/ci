const fs = require('fs')
const path = require('path')
if (fs.existsSync(path.resolve('./fail'))) {
  process.exit(1)
}
process.exit(0)
