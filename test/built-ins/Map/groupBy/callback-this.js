// Copyright (C) 2026 taxor03. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-map.groupby
description: Map.groupBy calls the callback with undefined as the this value
info: |
  Map.groupBy ( items, callbackfn )

  ...
  GroupBy ( items, callbackfn, coercion )

  6. Repeat,
    e. Let key be Completion(Call(callbackfn, undefined, « value, 𝔽(k) »)).
  ...
flags: [onlyStrict]
features: [array-grouping, Map]
---*/

let calls = 0;

Map.groupBy([1, 2], function () {
  calls++;
  assert.sameValue(this, undefined, "this value");
  return null;
});

assert.sameValue(calls, 2, "called for both elements");
