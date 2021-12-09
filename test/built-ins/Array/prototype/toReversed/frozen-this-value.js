// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed works on frozen objects
features: [change-array-by-copy]
---*/

var arr = Object.freeze([0, 1, 2]);
arr.toReversed();

var arrayLike = Object.freeze({ length: 3, 0: 0, 1: 1, 2: 2 });
Array.prototype.toReversed.call(arrayLike);
