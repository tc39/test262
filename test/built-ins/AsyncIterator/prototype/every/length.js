// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.every
description: >
  AsyncIterator.prototype.every has a "length" property whose value is 0.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(AsyncIterator.prototype.every.length, 1, 'The value of AsyncIterator.prototype.every.length is 1');

verifyNotEnumerable(AsyncIterator.prototype.every, 'length');
verifyNotWritable(AsyncIterator.prototype.every, 'length');
verifyConfigurable(AsyncIterator.prototype.every, 'length');
