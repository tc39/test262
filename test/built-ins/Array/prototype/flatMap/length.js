// Copyright (C) 2018 Shilpi Jain and Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: sec-array.prototype.flatMap
description: Array.prototype.flatMap.length value and descriptor.
info: >
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [Array.prototype.flatMap]
---*/

assert.sameValue(
  Array.prototype.flatMap.length, 1,
  'The value of `Array.prototype.flatmap.length` is `1`'
);

verifyNotEnumerable(Array.prototype.flatMap, 'length');
verifyNotWritable(Array.prototype.flatMap, 'length');
verifyConfigurable(Array.prototype.flatMap, 'length');
