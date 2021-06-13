// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.filter
description: >
  AsyncIterator.prototype.filter has a "length" property whose value is 0.
info: |
  ECMAScript Standard Built-in Objects

  Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(AsyncIterator.prototype.filter.length, 1, 'The value of AsyncIterator.prototype.filter.length is 1');

verifyNotEnumerable(AsyncIterator.prototype.filter, 'length');
verifyNotWritable(AsyncIterator.prototype.filter, 'length');
verifyConfigurable(AsyncIterator.prototype.filter, 'length');
