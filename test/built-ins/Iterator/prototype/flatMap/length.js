// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap has a "length" property whose value is 0.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(Iterator.prototype.flatMap.length, 1, 'The value of Iterator.prototype.flatMap.length is 1');

verifyNotEnumerable(Iterator.prototype.flatMap, 'length');
verifyNotWritable(Iterator.prototype.flatMap, 'length');
verifyConfigurable(Iterator.prototype.flatMap, 'length');
