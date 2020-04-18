const test = require('ava')
const jau = require('.')

test('no param', t => {
	t.deepEqual(jau([1, 2, 2, 3, 1, 2, 4]), [1, 2, 3, 4])
	t.deepEqual(jau(['a', 'a', 'b', 'a', 'c', 'a', 'd']), ['a', 'b', 'c', 'd'])
})
test('with property name', t => {
  t.deepEqual(jau([{a: 1}, {a: 1, b: 2}, {b: 2}], 'a'), [{a: 1}, {b: 2}])
  t.deepEqual(jau([{a: 1}, {a: 1, b: 2}, {b: 2}], 'b'), [{a: 1}, {a: 1, b: 2}])
})
test('with properties', t => {
  t.deepEqual(jau([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}], ['a', 'b']), [{a: 1, b: 2, c: 1}, {b: 2}])
})
test('with function', t => {
  t.deepEqual(jau([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}], 
    (a, b) => a.a === b.a || a.b === b.b), [{a: 1, b: 2, c: 1}])
})
