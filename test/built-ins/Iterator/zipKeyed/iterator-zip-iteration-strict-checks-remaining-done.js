// Copyright (C) 2026 Test262 Contributors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iterator.zipkeyed
description: >
  In strict mode, when all iterators finish at the same step, the result
  iterator completes normally and .next() is called on all of them.
info: |
  IteratorZip ( iters, mode, padding, finishResults )
    3. Let closure be a new Abstract Closure with no parameters that captures
       iters, iterCount, openIters, mode, padding, and finishResults, and
       performs the following steps when called:
      ...
      b. Repeat,
        ...
        iii. For each integer i such that 0 ≤ i < iterCount, in ascending order, do
          ...
          3. Else,
            ...
            d. If result is done, then
              i. Remove iter from openIters.
              ...
              iii. Else if mode is "strict", then
                i. If i ≠ 0, then
                  ...
                ii. For each integer k such that 1 ≤ k < iterCount, in ascending order, do
                  i. Let open be Completion(IteratorStep(iters[k])).
                  ...
                  v. If open is false, then
                    i. Remove iters[k] from openIters.
                iii. Return undefined.
includes: [compareArray.js]
features: [joint-iteration]
---*/

var log = [];

function makeIter(name, length) {
  var count = 0;
  return {
    next() {
      count++;
      log.push("call " + name + " next");
      return { done: count > length };
    },
    return() {
      log.push("unexpected call " + name + " return");
    }
  };
}

var it = Iterator.zipKeyed({
  a: makeIter("a", 2),
  b: makeIter("b", 2),
  c: makeIter("c", 2),
}, { mode: "strict" });

it.next();
it.next();

log.length = 0;

var result = it.next();
assert.sameValue(result.done, true);

assert.compareArray(log, [
  "call a next",
  "call b next",
  "call c next",
]);
