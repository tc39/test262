// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.toSorted
description: >
  %TypedArray%.prototype.toSorted caches the length getting the %typedarray% elements.
info: |
  %TypedArray%.prototype.toSorted ( compareFn )

  ...
  4. Let len be O.[[ArrayLength]].
  ...
  5. Let items be a new empty List.
  7. Let k be 0.
  8. Repeat, while k < len,
      a. Let Pk be ! ToString(𝔽(k)).
      b. Let kValue be ? Get(O, Pk).
      c. Append kValue to items.
      d. Set k to k + 1.
  9. Sort items using an implementation-defined sequence of calls
     to SortCompare. If any such call returns an abrupt completion,
     stop before performing any further calls to SortCompare or
     steps in this algorithm and return that completion.
  ...
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray, change-%typedarray%-by-copy]
---*/

testWithTypedArrayConstructors(TA => {
  var ta = new TA([3, 1, 2]);

  var popped = false;

  var sorted = ta.toSorted((a, b) => {
    if (!popped) ta.pop();
    popped = true;
    return 1;
  });

  assert.compareArray(sorted, [3, 1, 2]);
  assert.compareArray(ta, [3, 1]);
});
