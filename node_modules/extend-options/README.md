# Extend Options

Basic object extending for two Javascript hash objects, intended for merging provided
options with defaults.

## Installation

```
npm i --save extend-options
```

## Usage

```javascript
var extendOptions = require('extend-options');

var options = {
  a: 'a',
  c: 'c'
}

extendOptions({ a: 1, b: 2, c: 3 }, options);
// => { a: 'a', b: 2, c: 3 }
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
