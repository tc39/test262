// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSorted
description: >
  Array.prototype.toSorted reads all the array elements before calling compareFn
info: |
  Array.prototype.toSorted ( compareFn )

  ...
  6. Repeat, while k < len,
    a. Let Pk be ! ToString(𝔽(k)).
    b. Let kValue be ? Get(O, Pk).
    c. Append kValue to items.
    d. Set k to k + 1.
  7. Sort items using an implementation-defined sequence of
     calls to SortCompare. If any such call returns an abrupt
     completion, stop before performing any further calls to
     SortCompare or steps in this algorithm and return that completion.
  ...
features: [change-array-by-copy]
---*/

var getCalls = [];

var arrayLike = {
  length: 3,
  get 0() { getCalls.push(0); return 2; },
  get 1() { getCalls.push(1); return 1; },
  get 2() { getCalls.push(2); return 3; },

}

function StopToSorted() {}

assert.throws(StopToSorted, function() {
  Array.prototype.toSorted.call(arrayLike, () => {
    throw new StopToSorted();
  });
});

assert.deepEqual(getCalls, [0, 1, 2]);
