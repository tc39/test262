// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.entries
description: Return an iterator for the entries.
info: |
  22.2.3.6 %TypedArray%.prototype.entries ( )

  ...
  3. Return CreateArrayIterator(O, "key+value").
includes: [testBigIntTypedArray.js, compareArray.js]
features: [BigInt, TypedArray]
---*/

var sample = [0, 42, 64];

testWithBigIntTypedArrayConstructors(function(TA) {
  var typedArray = new TA(convertToBigInt(sample));
  var itor = typedArray.entries();

  var next = itor.next();
  assert(compareArray(next.value, [0, 0n]));
  assert.sameValue(next.done, false);

  next = itor.next();
  assert(compareArray(next.value, [1, 42n]));
  assert.sameValue(next.done, false);

  next = itor.next();
  assert(compareArray(next.value, [2, 64n]));
  assert.sameValue(next.done, false);

  next = itor.next();
  assert.sameValue(next.value, undefined);
  assert.sameValue(next.done, true);
});
