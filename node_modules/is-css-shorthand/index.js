'use strict'

var cssShorthandProperties = require('css-shorthand-properties').shorthandProperties

module.exports = function isCssShorthand (property) {
  if (typeof property !== 'string') {
    throw new TypeError('is-css-shorthand expected a string')
  }

  return Object.keys(cssShorthandProperties).indexOf(property.toLowerCase()) !== -1
}
