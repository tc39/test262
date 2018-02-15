// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.6
esid: sec-%typedarray%.prototype.entries
description: Return an iterator for the entries.
info: |
  22.2.3.6 %TypedArray%.prototype.entries ( )

  ...
  3. Return CreateArrayIterator(O, "key+value").
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

var sample = [0, 42, 64];

testWithTypedArrayConstructors(function(TA, N) {
  var typedArray = new TA(N(sample));
  var itor = typedArray.entries();

  var next = itor.next();
  assert(compareArray(next.value, [0, N(0)]));
  assert.sameValue(next.done, false);

  next = itor.next();
  assert(compareArray(next.value, [1, N(42)]));
  assert.sameValue(next.done, false);

  next = itor.next();
  assert(compareArray(next.value, [2, N(64)]));
  assert.sameValue(next.done, false);

  next = itor.next();
  assert.sameValue(next.value, undefined);
  assert.sameValue(next.done, true);
});
