// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.fill
description: >
  Returns `this`.
includes: [testTypedArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA, N) {
  var sample1 = new TA();
  var result1 = sample1.fill(N(1));

  assert.sameValue(result1, sample1);

  var sample2 = new TA(42);
  var result2 = sample2.fill(N(7));
  assert.sameValue(result2, sample2);
});
