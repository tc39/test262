// Copyright (C) 2026 taxor03. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.groupby
description: Object.groupBy closes the iterator when the callback throws
info: |
  Object.groupBy ( items, callbackfn )

  ...
  GroupBy ( items, callbackfn, coercion )

  6. Repeat,
    e. Let key be Completion(Call(callbackfn, undefined, « value, 𝔽(k) »)).
    f. IfAbruptCloseIterator(key, iteratorRecord).
  ...
features: [array-grouping, Symbol.iterator]
---*/

let returnCalls = 0;
const iterable = {
  [Symbol.iterator]() {
    return {
      next() {
        return { value: 1, done: false };
      },
      return() {
        returnCalls++;
        return {};
      }
    };
  }
};

assert.throws(Test262Error, function () {
  Object.groupBy(iterable, function () {
    throw new Test262Error("throw in callback");
  });
});

assert.sameValue(returnCalls, 1, "iterator closed");
