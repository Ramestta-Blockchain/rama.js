if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ramajs.node.min.js')
} else {
  module.exports = require('./ramajs.node.js')
}
