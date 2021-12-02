// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciterator.prototype
description: >
  The initial value of AsyncIterator.prototype is %AsyncIterator.prototype%.
info: |
  AsyncIterator.prototype

  The initial value of AsyncIterator.prototype is %AsyncIterator.prototype%.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
features: [iterator-helpers]
includes: [propertyHelper.js]
---*/

verifyProperty(AsyncIterator, 'prototype', {
  value: AsyncIterator.prototype,
  writable: false,
  enumerable: false,
  configurable: false,
});
