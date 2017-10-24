// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.from
description: >
  Return a new TypedArray using mapfn
includes: [testTypedArray.js]
features: [TypedArray]
---*/

var source = [42, 43, 42];

testWithTypedArrayConstructors(function(TA, N) {
  var mapfn = function(kValue) {
    return N(kValue * 2);
  };

  var result = TA.from(source, mapfn);
  assert.sameValue(result.length, 3);
  assert.sameValue(result[0], N(84));
  assert.sameValue(result[1], N(86));
  assert.sameValue(result[2], N(84));
  assert.sameValue(result.constructor, TA);
  assert.sameValue(Object.getPrototypeOf(result), TA.prototype);
});
