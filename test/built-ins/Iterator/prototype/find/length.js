// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.find
description: >
  AsyncIterator.prototype.find has a "length" property whose value is 0.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(AsyncIterator.prototype.find.length, 1, 'The value of AsyncIterator.prototype.find.length is 1');

verifyNotEnumerable(AsyncIterator.prototype.find, 'length');
verifyNotWritable(AsyncIterator.prototype.find, 'length');
verifyConfigurable(AsyncIterator.prototype.find, 'length');
