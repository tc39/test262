// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Iterator.prototype.drop has a "length" property whose value is 1.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(Iterator.prototype.drop.length, 1, 'The value of Iterator.prototype.drop.length is 1');

verifyNotEnumerable(Iterator.prototype.drop, 'length');
verifyNotWritable(Iterator.prototype.drop, 'length');
verifyConfigurable(Iterator.prototype.drop, 'length');
