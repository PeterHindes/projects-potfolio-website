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
