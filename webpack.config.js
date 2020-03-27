const path = require('path');

module.exports = {
  entry: './src/js/npm_packages.js',
  output: {
    path: path.join(__dirname, "public/js"),
    filename: 'npm_packages_bundle.js'
  }
}