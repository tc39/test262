// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSpliced
description: Array.prototype.toSpliced reads the items of the original array in order
info: |
  22.1.3.25 Array.prototype.toSpliced (start, deleteCount , ...items )

  Steps 14-18

features: [change-array-by-copy]
includes: [compareArray.js]
---*/

var order = [];

var arrayLike = {
  get 0() { order.push(0); return "a" },
  get 1() { order.push(1); return "b" },
  2: "none",
  get 3() { order.push(3); return "c" },
  length: 4,
};

var result = Array.prototype.toSpliced.call(arrayLike, 2, 1);
assert.compareArray(result, ["a", "b", "c"]);

assert.compareArray(order, [0, 1, 3]);

order = [];
var arr = [0, 1, "none", 3];
Object.defineProperty(arr, 0, { get: function() { order.push(0); return "a" } });
Object.defineProperty(arr, 1, { get: function() { order.push(1); return "b" } });
Object.defineProperty(arr, 3, { get: function() { order.push(3); return "c" } });

result = Array.prototype.toSpliced.call(arr, 2, 1);
assert.compareArray(result, ["a", "b", "c"]);

assert.compareArray(order, [0, 1, 3]);
