# get-css-classes [![Build Status](https://secure.travis-ci.org/johnotander/get-css-classes.png?branch=master)](https://travis-ci.org/johnotander/get-css-classes)

Get CSS classes from a selector string.

## Installation

```bash
npm install --save get-css-classes
```

## Usage

```javascript
var getCssClasses = require('get-css-classes');

getCssClasses('.some#selector li:first-child .foo:first-child');  // => ['.some', '.foo']

getCssClasses('.some#other .selector:first-child', { keepPseudos: true })  // => ['.some', '.selector:first-child']
```

#### Options

- `keepPseudos`: _Boolean_ - Whether to keep pseudo elements and classes. Default: `false`

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
