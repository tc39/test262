// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.every
description: >
  The "name" property of AsyncIterator.prototype.every
info: |
  17 ECMAScript Standard Built-in Objects

  Every built-in Function object, including constructors, that is not
  identified as an anonymous function has a name property whose value is a
  String. Unless otherwise specified, this value is the name that is given to
  the function in this specification.

  ...

  Unless otherwise specified, the name property of a built-in Function
  object, if it exists, has the attributes { [[Writable]]: false,
  [[Enumerable]]: false, [[Configurable]]: true }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

assert.sameValue(AsyncIterator.prototype.every.name, 'every', 'The value of AsyncIterator.prototype.every.name is "every"');

verifyNotEnumerable(AsyncIterator.prototype.every, 'name');
verifyNotWritable(AsyncIterator.prototype.every, 'name');
verifyConfigurable(AsyncIterator.prototype.every, 'name');
