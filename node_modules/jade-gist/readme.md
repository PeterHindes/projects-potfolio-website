jade-gist
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/jade-gist.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jade-gist
[downloads-image]: http://img.shields.io/npm/dm/jade-gist.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/jade-gist
[david-image]: http://img.shields.io/david/chunpu/jade-gist.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/jade-gist


Layouts and Mixins by Jade

Installation
---

```sh
npm i jade-gist
```

Usage
---

#### mixin

```jade
include mixin/all
```

#### layout

```jade
extend layout/basic
```


Use it by npm
---

```sh
npm i jade-gist

editor views/index.jade

# pretty build jade file
jade -P -p node_modules/jade-gist/. < views/index.jade
```


Layout
---

If you use layout like [layout/basic](layout/basic.jade)

- use `block` to replace the default value
- use `append` to insert after block
- use `prepend` to insert before block

[Detail Jade Inheritance Reference](http://jade-lang.com/reference/inheritance/)

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/jade-gist.svg?style=flat-square
[license-url]: #
