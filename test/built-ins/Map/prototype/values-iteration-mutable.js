// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      When an item is added to the map after the iterator is created but before
      the iterator is "done" (as defined by 23.1.5.2.1), the new item should be
      accessible via iteration. When an item is added to the map after the
      iterator is "done", the new item should not be accessible via iteration.
  es6id: 23.1.3.11
 ---*/

var map = new Map();
map.set(1, 11);
map.set(2, 22);

var iterator = map.values();
var result;

result = iterator.next();
assert.sameValue(result.value, 11, 'First result `value`');
assert.sameValue(result.done, false, 'First result `done` flag');

map.set(3, 33);

result = iterator.next();
assert.sameValue(result.value, 22, 'Second result `value`');
assert.sameValue(result.done, false, 'Second result `done` flag');

result = iterator.next();
assert.sameValue(result.value, 33, 'Third result `value`');
assert.sameValue(result.done, false, 'Third result `done` flag');

result = iterator.next();
assert.sameValue(result.value, undefined, 'Exhausted result `value`');
assert.sameValue(result.done, true, 'Exhausted result `done` flag');

map.set(4, 44);

result = iterator.next();
assert.sameValue(
  result.value, undefined, 'Exhausted result `value` (repeated request)'
);
assert.sameValue(
  result.done, true, 'Exhausted result `done` flag (repeated request)'
);
