// Copyright (C) 2021 Microsoft. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.findlastindex
description: Array.prototype.findLastIndex.length value and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [array-find-from-last]
---*/

assert.sameValue(
  Array.prototype.findLastIndex.length, 1,
  'The value of `Array.prototype.findLastIndex.length` is `1`'
);

verifyNotEnumerable(Array.prototype.findLastIndex, 'length');
verifyNotWritable(Array.prototype.findLastIndex, 'length');
verifyConfigurable(Array.prototype.findLastIndex, 'length');
