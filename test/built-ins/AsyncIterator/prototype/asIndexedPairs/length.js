// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.asindexedpairs
description: >
  AsyncIterator.prototype.asIndexedPairs has a "length" property whose value is 0.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(AsyncIterator.prototype.asIndexedPairs.length, 0, 'The value of AsyncIterator.prototype.asIndexedPairs.length is 0');

verifyNotEnumerable(AsyncIterator.prototype.asIndexedPairs, 'length');
verifyNotWritable(AsyncIterator.prototype.asIndexedPairs, 'length');
verifyConfigurable(AsyncIterator.prototype.asIndexedPairs, 'length');
