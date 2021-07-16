// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.findlast
description: >
  Return found value if predicate return a boolean true value.
info: |
  %TypedArray%.prototype.findLast (predicate [ , thisArg ] )

  6. Repeat, while k ≥ 0,
    ...
    c. Let testResult be ! ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »)).
    d. If testResult is true, return kValue.
    ...
includes: [testTypedArray.js]
features: [Symbol, TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([39, 2, 62]);
  var called, result;

  called = 0;
  result = sample.findLast(function() {
    called++;
    return true;
  });
  assert.sameValue(result, 62, "returned true on sample[2]");
  assert.sameValue(called, 1, "predicate was called once");

  called = 0;
  result = sample.findLast(function(val) {
    called++;
    return val === 62;
  });
  assert.sameValue(called, 1, "predicate was called once");
  assert.sameValue(result, 62, "returned true on sample[2]");

  result = sample.findLast(function() { return "string"; });
  assert.sameValue(result, 62, "ToBoolean(string)");

  result = sample.findLast(function() { return {}; });
  assert.sameValue(result, 62, "ToBoolean(object)");

  result = sample.findLast(function() { return Symbol(""); });
  assert.sameValue(result, 62, "ToBoolean(symbol)");

  result = sample.findLast(function() { return 1; });
  assert.sameValue(result, 62, "ToBoolean(number)");

  result = sample.findLast(function() { return -1; });
  assert.sameValue(result, 62, "ToBoolean(negative number)");
});
