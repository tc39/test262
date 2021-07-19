// Copyright (C) 2021 Microsoft. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.findlastindex
description: Property type and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [array-find-from-last]
---*/

assert.sameValue(
  typeof Array.prototype.findLastIndex,
  'function',
  '`typeof Array.prototype.findLastIndex` is `function`'
);

verifyNotEnumerable(Array.prototype, 'findLastIndex');
verifyWritable(Array.prototype, 'findLastIndex');
verifyConfigurable(Array.prototype, 'findLastIndex');
