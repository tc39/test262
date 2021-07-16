// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.findlast
description: Array.prototype.findLast.length value and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  Array.prototype.findLast.length, 1,
  'The value of `Array.prototype.findLast.length` is `1`'
);

verifyNotEnumerable(Array.prototype.findLast, 'length');
verifyNotWritable(Array.prototype.findLast, 'length');
verifyConfigurable(Array.prototype.findLast, 'length');
