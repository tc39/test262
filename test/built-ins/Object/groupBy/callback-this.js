// Copyright (C) 2026 taxor03. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.groupby
description: Object.groupBy calls the callback with undefined as the this value
info: |
  Object.groupBy ( items, callbackfn )

  ...
  GroupBy ( items, callbackfn, coercion )

  6. Repeat,
    e. Let key be Completion(Call(callbackfn, undefined, « value, 𝔽(k) »)).
  ...
flags: [onlyStrict]
features: [array-grouping]
---*/

let calls = 0;

Object.groupBy([1, 2], function () {
  calls++;
  assert.sameValue(this, undefined, "this value");
  return null;
});

assert.sameValue(calls, 2, "called for both elements");
