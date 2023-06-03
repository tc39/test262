// Copyright (C) 2023 Kevin Gibbons, Anthony Frehner. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: Set.prototype.union calls a Set-like class's methods in order
features: [Set-methods]
---*/

const observedOrder = [];
const expectedOrder = [
  "getting size",
  "getting has",
  "getting keys",
  "calling keys",
  "getting next",
  // first iteration, has value
  "calling next",
  "getting done",
  "getting value",
  // second iteration, has value
  "calling next",
  "getting done",
  "getting value",
  // third iteration, no value; ends
  "calling next",
  "getting done",
];

function observableIterator() {
  let values = ["a", "b"];
  let index = 0;
  return {
    get next() {
      observedOrder.push("getting next");
      return function () {
        observedOrder.push("calling next");
        return {
          get done() {
            observedOrder.push("getting done");
            return index >= values.length;
          },
          get value() {
            observedOrder.push("getting value");
            return values[index++];
          },
        };
      };
    },
  };
}

class MySetLike {
  get size() {
    observedOrder.push("getting size");
    return 2;
  }
  get has() {
    observedOrder.push("getting has");
    return function () {};
  }
  get keys() {
    observedOrder.push("getting keys");
    return function () {
      observedOrder.push("calling keys");
      return observableIterator();
    };
  }
}

const s1 = new Set([1, 2]);
const s2 = new MySetLike();
const combined = s1.union(s2);

observedOrder.forEach(function (observedOrderItem) {
  assert.sameValue(observedOrderItem, expectedOrder.shift());
});

assert.sameValue(
  expectedOrder.length,
  0,
  "The value of expectedOrder.length is 0"
);
