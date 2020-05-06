var assert = require('assert')
var getCssClasses = require('..')

var selectors = [
  '.some.selector',
  '.some + .selector',
  '.some > .selector',
  'li.some .selector'
]

describe('get-css-classes', function() {

  it('should do return an empty array when no classes are found', function() {
    assert.deepEqual(getCssClasses('input[type="email"]:last-child'), [])
  })

  it('it should return an array of CSS classes', function() {
    assert.deepEqual(
      getCssClasses('.some.awesome input[type="email"].css .classes > .here #wootwoot'),
      ['.some', '.awesome', '.css', '.classes', '.here']
    )
  })

  it('should handle a wide array of selectors', function() {
    selectors.forEach(function(selector) {
      assert.deepEqual(getCssClasses(selector), ['.some', '.selector'])
    })
  })
})

describe('get-css-classes keepPseudos: true', function() {
  it('should return the classes with pseudos', function() {
    assert.deepEqual(
      getCssClasses('.class::after .other .one:first-child', {
        keepPseudos: true
      }),
      ['.class::after', '.other', '.one:first-child']
    )
  })
})
