// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.findlast
description: >
  Predicate is called for each array property.
info: |
  Array.prototype.findLast ( predicate[ , thisArg ] )

  ...
  3. If IsCallable(predicate) is false, throw a TypeError exception.
  4. Let k be len - 1.
  5. Repeat, while k ≥ 0,
    ...
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
  ...
---*/

var arr = [undefined, , , 'foo'];
var called = 0;

arr.findLast(function() {
  called++;
});

assert.sameValue(called, 4);
