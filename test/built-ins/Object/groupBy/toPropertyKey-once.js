// Copyright (C) 2026 taxor03. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.groupby
description: Object.groupBy converts each key with ToPropertyKey once
info: |
  Object.groupBy ( items, callbackfn )

  ...
  GroupBy ( items, callbackfn, coercion )

  6. Repeat,
    g. If coercion is property, then
      i. Set key to Completion(ToPropertyKey(key)).
      ii. IfAbruptCloseIterator(key, iteratorRecord).
    ...
    i. Perform AddValueToKeyedGroup(groups, key, value).
  ...
includes: [compareArray.js]
features: [array-grouping]
---*/

let calls = 0;
const key = {
  toString() {
    calls++;
    return "k";
  }
};

const obj = Object.groupBy([1, 2], function () {
  return key;
});

assert.sameValue(calls, 2, "ToPropertyKey called once per element");
assert.compareArray(obj.k, [1, 2]);
