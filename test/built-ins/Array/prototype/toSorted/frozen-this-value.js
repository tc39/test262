// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toSorted
description: >
  Array.prototype.toSorted works on frozen objects
features: [change-array-by-copy]
---*/

var arr = Object.freeze([2, 0, 1]);
arr.toSorted();

var arrayLike = Object.freeze({ length: 3, 0: 2, 1: 0, 2: 1 });
Array.prototype.toSorted.call(arrayLike);
