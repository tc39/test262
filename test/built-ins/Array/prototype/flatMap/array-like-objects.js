// Copyright (C) 2018 Shilpi Jain. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatMap
description: >
    array-like objects can be flattened
includes: [compareArray.js]
---*/

function takesTwoParams(a, b) {
  return Array.prototype.flatMap.call(arguments, function(ele) { return ele * 2});
}

var actual = takesTwoParams(1,[2]);
var expected = [2, 4];

assert(compareArray(actual, expected), 'arguments array like object');

var a = {
  "length": 1,
  "0": 1
};

actual = Array.prototype.flatMap.call(a, function(ele) { return ele * 2});
assert.sameValue(JSON.stringify(actual), JSON.stringify(['2']), 'array like objects');

var a = {
  "length": undefined,
  "0": 1
};

actual = Array.prototype.flatMap.call(a, function(ele) { return ele * 2});
assert.sameValue(JSON.stringify(actual), JSON.stringify([]), 'array like objects');
