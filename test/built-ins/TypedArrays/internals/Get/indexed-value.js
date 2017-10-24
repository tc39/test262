// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-get-p-receiver
description: >
  Return value from valid numeric index
info: |
  9.4.5.4 [[Get]] (P, Receiver)

  ...
  2. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      i. Return ? IntegerIndexedElementGet(O, numericIndex).
  ...
includes: [testTypedArray.js]
features: [TypedArray]
---*/

var proto = TypedArray.prototype;
var throwDesc = {
  get: function() {
    throw new Test262Error("OrdinaryGet was called! Ref: 9.1.8.1 3.c");
  }
};
Object.defineProperty(proto, "0", throwDesc);
Object.defineProperty(proto, "1", throwDesc);

testWithTypedArrayConstructors(function(TA, N) {
  var sample = new TA(N([42, 1]));

  assert.sameValue(sample["0"], N(42));
  assert.sameValue(sample["1"], N(1));
});
