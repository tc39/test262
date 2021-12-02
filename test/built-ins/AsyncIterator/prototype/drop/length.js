// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  AsyncIterator.prototype.drop has a "length" property whose value is 1.
info: |
  The AsyncIterator.prototype.drop Constructor

  The length property of the AsyncIterator.prototype.drop constructor function is 1.
  ...

  ES7 section 17: Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(AsyncIterator.prototype.drop.length, 1, 'The value of AsyncIterator.prototype.drop.length is 1');

verifyNotEnumerable(AsyncIterator.prototype.drop, 'length');
verifyNotWritable(AsyncIterator.prototype.drop, 'length');
verifyConfigurable(AsyncIterator.prototype.drop, 'length');
