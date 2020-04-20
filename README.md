# jau

Just Anothor Unique array of objects.

```js
const jau = require('jau')

// no param, simple equal will be used
jau([1, 2, 2, 3, 1, 2, 4])
// [1, 2, 3, 4]
jau(['a', 'a', 'b', 'a', 'c', 'a', 'd']
// ['a', 'b', 'c', 'd']

// with property name
jau([{a: 1}, {a: 1, b: 2}, {b: 2}], 'a')
// [{a: 1}, {b: 2}]
jau([{a: 1}, {a: 1, b: 2}, {b: 2}], 'b')
// [{a: 1}, {a: 1, b: 2}]

// with properties
jau([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}], ['a', 'b'])
// [{a: 1, b: 2, c: 1}, {b: 2}]

// with function
jau([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}], 
        (a, b) => a.a === b.a || a.b === b.b)
// [{a: 1, b: 2, c: 1}]
```
