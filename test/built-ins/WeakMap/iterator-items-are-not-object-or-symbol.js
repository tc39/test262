// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakmap-iterable
description: >
  Throws a TypeError if iterable items are not Objects or Symbols.
info: |
  WeakMap ( [ iterable ] )

  ...
  9. Repeat
    ...
    d. Let nextItem be IteratorValue(next).
    e. ReturnIfAbrupt(nextItem).
    f. If HasIdentity(_key_) is *false*,
      i. Let error be Completion{[[type]]: throw, [[value]]: a newly created
      TypeError object, [[target]]:empty}.
      ii. Return IteratorClose(iter, error).
features: [WeakMap]
---*/

assert.throws(TypeError, function() {
  new WeakMap([1, 1]);
});

assert.throws(TypeError, function() {
  new WeakMap(['', 1]);
});

assert.throws(TypeError, function() {
  new WeakMap([true, 1]);
});

assert.throws(TypeError, function() {
  new WeakMap([null, 1]);
});

assert.throws(TypeError, function() {
  new WeakMap([undefined, 1]);
});

assert.throws(TypeError, function() {
  new WeakMap([
    ['a', 1], 2
  ]);
});
