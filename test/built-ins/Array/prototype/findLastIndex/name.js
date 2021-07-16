// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.findlastindex
description: >
  Array.prototype.findLastIndex.name value and descriptor.
info: |
  Array.prototype.findLastIndex ( predicate [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  Array.prototype.findIndex.name, 'findLastIndex',
  'The value of `Array.prototype.findLastIndex.name` is `"findLastIndex"`'
);

verifyNotEnumerable(Array.prototype.findLastIndex, 'name');
verifyNotWritable(Array.prototype.findLastIndex, 'name');
verifyConfigurable(Array.prototype.findLastIndex, 'name');
