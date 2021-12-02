// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakmap.prototype.delete
description: >
  Delete an entry from initial iterable.
info: |
  WeakMap.prototype.delete ( value )

  ...
  5. Let entries be the List that is the value of M’s [[WeakMapData]] internal
  slot.
  6. If HasIdentity(_key_) is *false*, return *false*.
  7. Repeat for each Record {[[key]], [[value]]} p that is an element of
  entries,
    a. If p.[[key]] is not empty and SameValue(p.[[key]], key) is true, then
      i. Set p.[[key]] to empty.
      ii. Set p.[[value]] to empty.
      iii. Return true.
  ...
features: [Symbol, WeakMap, permit-symbol-weakmap-key-weakset-entry-weakref-target]
---*/

var foo = {};
var bar = Symbol();
var map = new WeakMap([
  [foo, 42],
  [bar, 42],
]);

assert.sameValue(map.delete(foo), true, 'WeakMap#delete returns true');
assert.sameValue(map.has(foo), false);

assert.sameValue(map.delete(bar), true, 'WeakMap#delete returns true');
assert.sameValue(map.has(bar), false);
