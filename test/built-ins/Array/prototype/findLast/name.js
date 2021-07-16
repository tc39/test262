// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.findlast
description: >
  Array.prototype.findLast.name value and descriptor.
info: |
  Array.prototype.findLast ( predicate [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

assert.sameValue(
  Array.prototype.findLast.name, 'findLast',
  'The value of `Array.prototype.findLast.name` is `"findLast"`'
);

verifyNotEnumerable(Array.prototype.findLast, 'name');
verifyNotWritable(Array.prototype.findLast, 'name');
verifyConfigurable(Array.prototype.findLast, 'name');
