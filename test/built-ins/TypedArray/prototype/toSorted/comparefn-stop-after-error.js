// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSorted
description: >
  %TypedArray%.prototype.toSorted doesn't call copmareFn if there is an error
info: |
  %TypedArray%.prototype.toSorted ( compareFn )

  ...
  9. Sort items using an implementation-defined sequence of
     calls to SortCompare. If any such call returns an abrupt
     completion, stop before performing any further calls to
     SortCompare or steps in this algorithm and return that completion.
  ...
includes: [testTypedArray.js]
features: [TypedArray, change-array-by-copy]
---*/

function StopToSorted() {}

var called = false;

testWithTypedArrayConstructors(TA => {
  var called = false;
  var ta = new TA([3, 1, 2]);
  ta.toSorted(() => {
    if (first) {
      first = false;
      throw new StopToSorted();
    }
    called = true;
  });
  assert.sameValue(called, false, "compareFn is not called after an error");
});
