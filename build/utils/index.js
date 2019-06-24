/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

exports.resolve = (...toPath) => {
  return path.join(process.cwd(), ...toPath)
}