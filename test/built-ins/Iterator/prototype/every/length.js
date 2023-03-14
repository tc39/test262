// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every has a "length" property whose value is 0.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(Iterator.prototype.every.length, 1, 'The value of Iterator.prototype.every.length is 1');

verifyNotEnumerable(Iterator.prototype.every, 'length');
verifyNotWritable(Iterator.prototype.every, 'length');
verifyConfigurable(Iterator.prototype.every, 'length');
