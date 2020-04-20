const test = require('ava');
const jau = require('.');

test('group: no param', t => {
  t.deepEqual(jau.group([1, 2, 2, 3, 1, 2, 4]),
    [[1, 1], [2, 2, 2], [3], [4]]);
  t.deepEqual(jau.group(['a', 'a', 'b', 'a', 'c', 'b', 'd']),
    [['a', 'a', 'a'], ['b', 'b'], ['c'], ['d']]);
});
test('group: with property name', t => {
  t.deepEqual(jau.group([{a: 1}, {a: 1, b: 2}, {b: 2}], 'a'),
    [[{a: 1}, {a: 1, b: 2}], [{b: 2}]]);
  t.deepEqual(jau.group([{a: 1}, {a: 1, b: 2}, {b: 2}], 'b'),
    [[{a: 1}], [{a: 1, b: 2}, {b: 2}]]);
});
test('group: with properties', t => {
  t.deepEqual(jau.group([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}], ['a', 'b']),
    [[{a: 1, b: 2, c: 1}, {a: 1, b: 2}], [{b: 2}]]);
});
test('group: with function', t => {
  t.deepEqual(jau.group([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}],
    (a, b) => a.a === b.a || a.b === b.b),
  [[{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}]]);
});

test('unique: no param', t => {
  t.deepEqual(jau.unique([1, 2, 2, 3, 1, 2, 4]),
    [1, 2, 3, 4]);
  t.deepEqual(jau.unique(['a', 'a', 'b', 'a', 'c', 'b', 'd']),
    ['a', 'b', 'c', 'd']);
});
test('unique: with property name', t => {
  t.deepEqual(jau.unique([{a: 1}, {a: 1, b: 2}, {b: 2}], 'a'),
    [{a: 1}, {b: 2}]);
  t.deepEqual(jau.unique([{a: 1}, {a: 1, b: 2}, {b: 2}], 'b'),
    [{a: 1}, {a: 1, b: 2}]);
});
test('unique: with properties', t => {
  t.deepEqual(jau.unique([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}], ['a', 'b']),
    [{a: 1, b: 2, c: 1}, {b: 2}]);
});
test('unique: with function', t => {
  t.deepEqual(jau.unique([{a: 1, b: 2, c: 1}, {a: 1, b: 2}, {b: 2}],
    (a, b) => a.a === b.a || a.b === b.b), [{a: 1, b: 2, c: 1}]);
});
