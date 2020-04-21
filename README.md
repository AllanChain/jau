# jau

Just Anothor Unique array of objects.

## `jau.unique`

jau can get unique objects by key(s) or a function. The first "unique object" is returned.

```js
const jau = require('jau')

// no param, simple equal will be used

jau.unique([1, 2, 2, 3, 1, 2, 4])
// [1, 2, 3, 4]
jau.unique(['a', 'a', 'b', 'a', 'c', 'a', 'd']
// ['a', 'b', 'c', 'd']

// with property name

jau.unique([{a: 1}, {a: 1, b: 2}, {b: 2}], 'a')
// [{a: 1}, {b: 2}]
jau.unique([{a: 1}, {a: 1, b: 2}, {b: 2}], 'b')
// [{a: 1}, {a: 1, b: 2}]

// with properties

jau.unique([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}], ['a', 'b'])
// [{a: 1, b: 2, c: 1}, {b: 2}]

// with function

jau.unique([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}], 
  (a, b) => a.a === b.a || a.b === b.b)
// [{a: 1, b: 2, c: 1}]
```

## `jau.group`

Sometimes you may need to get the last "unique object", or perform some merge operation. `jau.group` gives you control over this.

Similarly:

```js
// group: no param
jau.group([1, 2, 2, 3, 1, 2, 4]),
// [[1, 1], [2, 2, 2], [3], [4]]

// group: with property name
jau.group([{a: 1}, {a: 1, b: 2}, {b: 2}], 'a'),
// [[{a: 1}, {a: 1, b: 2}], [{b: 2}]]

// group: with properties
jau.group([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}], ['a', 'b']),
// [[{a: 1, b: 2, c: 1}, {a: 1, b: 2}], [{b: 2}]]

// group: with function
jau.group([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}],
  (a, b) => a.a === b.a || a.b === b.b)
// [[{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}]]
```
