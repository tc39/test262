// Copyright (C) 2023 Anthony Frehner and Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-set.prototype.difference
description: Set.prototype.difference calls a Set-like class's methods in order
features: [set-methods]
includes: [compareArray.js]
---*/

const observedOrder = [];
const expectedOrder = [
  "getting size",
  "ToNumber(size)",
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
  let values = [2, 4];
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
    return {
      valueOf: function () {
        observedOrder.push("ToNumber(size)");
        return 2;
      },
    };
  }
  get has() {
    observedOrder.push("getting has");
    return function () {
      throw new Test262Error("Set.prototype.difference should not call its argument's has method when this.size > arg.size");
    };
  }
  get keys() {
    observedOrder.push("getting keys");
    return function () {
      observedOrder.push("calling keys");
      return observableIterator();
    };
  }
}

const s1 = new Set([1, 2, 3]);
const s2 = new MySetLike();
const combined = s1.difference(s2);

assert.compareArray([...combined], [1, 3]);
assert.compareArray(observedOrder, expectedOrder);
