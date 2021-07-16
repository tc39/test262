// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.findlast
description: Property type and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Array.prototype.findLast,
  'function',
  '`typeof Array.prototype.findLast` is `function`'
);

verifyNotEnumerable(Array.prototype, 'findLast');
verifyWritable(Array.prototype, 'findLast');
verifyConfigurable(Array.prototype, 'findLast');
