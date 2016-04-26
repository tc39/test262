// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: Use internal ArrayLength instead of getting a length property
info: >
  22.2.3.24 %TypedArray%.prototype.slice ( start, end )

  ...
  3. Let len be the value of O's [[ArrayLength]] internal slot.
  ...
includes: [testTypedArray.js, compareArray.js]
---*/

var getCalls = 0;
var desc = {
  get: function getLen() {
    getCalls++;
    return 0;
  }
};

Object.defineProperty(TypedArray.prototype, "length", desc);

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([42, 43]);
  getCalls = 0;

  Object.defineProperty(TA.prototype, "length", desc);
  Object.defineProperty(sample, "length", desc);

  var result = sample.slice();

  assert.sameValue(getCalls, 0, "ignores length properties");
  assert(
    compareArray(result, sample),
    "result is not affected by custom length"
  );
});
