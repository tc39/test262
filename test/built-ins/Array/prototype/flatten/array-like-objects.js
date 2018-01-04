// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatten
description: >
    array-like objects can be flattened
includes: [compareArray.js]
---*/

function takesTwoParams(a, b) {
  return Array.prototype.flatten.call(arguments);
}

var actual = takesTwoParams(1,[2]);
var expected = [1, 2];

assert(compareArray(actual, expected), 'arguments array like object');

var a = {
  "length": 1,
  "0": 'a'
};

actual = Array.prototype.flatten.call(a);
assert.sameValue(JSON.stringify(actual), JSON.stringify(['a']), 'array like objects');

a = {
  "length": undefined,
  "0": 'a'
};
assert.sameValue(JSON.stringify(actual), JSON.stringify([]), 'array like objects undefined length');
