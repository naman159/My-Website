# is-css-shorthand [![Build Status](https://secure.travis-ci.org/johnotander/is-css-shorthand.png?branch=master)](https://travis-ci.org/johnotander/is-css-shorthand) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Check whether a given CSS property is the shorthand form.

## Installation

```bash
npm install --save is-css-shorthand
```

## Usage

```javascript
var isCssShorthand = require('is-css-shorthand')

isCssShorthand('background')  // => true
isCssShorthand('font')  // => true
isCssShorthand('font-family')  // => false
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
