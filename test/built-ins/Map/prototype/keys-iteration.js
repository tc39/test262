// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      The method should return a valid iterator with the context as the
      IteratedObject.
  es6id: 23.1.3.8
 ---*/

var map = new Map();
map.set(1, 11);
map.set(2, 22);
map.set(3, 33);

var iterator = map.keys();
var result;

result = iterator.next();
assert.sameValue(result.value, 1, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');

result = iterator.next();
assert.sameValue(result.value, 2, 'Second result `value`');
assert.sameValue(result.done, false, 'Second result `done` flag');

result = iterator.next();
assert.sameValue(result.value, 3, 'Third result `value`');
assert.sameValue(result.done, false, 'Third result `done` flag');

result = iterator.next();
assert.sameValue(result.value, undefined, 'Exhausted result `value`');
assert.sameValue(result.done, true, 'Exhausted result `done` flag');

result = iterator.next();
assert.sameValue(
  result.value, undefined, 'Exhausted result `value` (repeated request)'
);
assert.sameValue(
  result.done, true, 'Exhausted result `done` flag (repeated request)'
);
