// Copyright (C) 2021 Microsoft. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.findlast
description: Property type and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [array-find-from-last]
---*/

assert.sameValue(
  typeof Array.prototype.findLast,
  'function',
  '`typeof Array.prototype.findLast` is `function`'
);

verifyNotEnumerable(Array.prototype, 'findLast');
verifyWritable(Array.prototype, 'findLast');
verifyConfigurable(Array.prototype, 'findLast');
