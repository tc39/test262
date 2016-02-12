// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
id: sec-%typedarray%.from
description: >
  Assert mapfn arguments
info: >
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  ...
  10. Repeat, while k < len
    ...
    c. If mapping is true, then
      i. Let mappedValue be ? Call(mapfn, T, « kValue, k »).
  ...
includes: [testTypedArray.js]
---*/

var source = [42, 43, 44];

testWithTypedArrayConstructors(function(TA) {
  var results = [];
  var mapfn = function(kValue, k) {
    results[k] = kValue;
  };

  TA.from(source, mapfn);

  assert.sameValue(results[0], 42);
  assert.sameValue(results[1], 43);
  assert.sameValue(results[2], 44);
  assert.sameValue(results.length, 3);
});
