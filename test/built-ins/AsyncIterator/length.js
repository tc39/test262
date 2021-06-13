// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciterator-constructor
description: >
  AsyncIterator has a "length" property whose value is 0.
info: |
  The AsyncIterator Constructor

  The length property of the AsyncIterator constructor function is 0.
  ...

  ES7 section 17: Unless otherwise specified, the length property of a built-in
  Function object has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(AsyncIterator.length, 0, 'The value of AsyncIterator.length is 0');

verifyNotEnumerable(AsyncIterator, 'length');
verifyNotWritable(AsyncIterator, 'length');
verifyConfigurable(AsyncIterator, 'length');
