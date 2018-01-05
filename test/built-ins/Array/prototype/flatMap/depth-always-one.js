// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatMap
description: >
    Behavior when array is depth more than 1
includes: [compareArray.js]
---*/

assert.compareArray([1, 2].flatMap(function(e) {
  return [e, e * 2];
}), [1, 2, 2, 4], 'array depth is 1');

assert.compareArray([1, 2, 3].flatMap(function(ele) {
  return [[ele * 2]];
}), [[2], [4], [6]], 'array depth is more than 1');
