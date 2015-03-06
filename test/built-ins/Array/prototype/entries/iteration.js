// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      The method should return a valid iterator with the context as the
      IteratedObject.
  es6id: 22.1.3.4
 ---*/

var ArrayIteratorPrototype = Object.getPrototypeOf(Array.prototype[Symbol.iterator]());
var array = ['a', 'b', 'c'];
var iterator = array.entries();
var result;

assert.sameValue(ArrayIteratorPrototype, Object.getPrototypeOf(array.entries()));

result = iterator.next();
assert.sameValue(result.done, false, 'First result `done` flag');
assert.sameValue(result.value[0], 0, 'First result `value` (array key)');
assert.sameValue(result.value[1], 'a', 'First result `value` (array value)');
assert.sameValue(result.value.length, 2, 'First result `value` (length)');

result = iterator.next();
assert.sameValue(result.done, false, 'Second result `done` flag');
assert.sameValue(result.value[0], 1, 'Second result `value` (array key)');
assert.sameValue(result.value[1], 'b', 'Second result `value` (array value)');
assert.sameValue(result.value.length, 2, 'Second result `value` (length)');

result = iterator.next();
assert.sameValue(result.done, false, 'Third result `done` flag');
assert.sameValue(result.value[0], 2, 'Third result `value` (array key)');
assert.sameValue(result.value[1], 'c', 'Third result `value` (array value)');
assert.sameValue(result.value.length, 2, 'Third result `value` (length)');

result = iterator.next();
assert.sameValue(result.done, true, 'Exhausted result `done` flag');
assert.sameValue(result.value, undefined, 'Exhausted result `value`');
