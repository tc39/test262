// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error.prototype.toString
description: >
  Property descriptor of AggregateError.prototype.toString
info: |
  ES Section 17

  Every other data property (...) has the attributes { [[Writable]]: true, [[Enumerable]]: false,
  [[Configurable]]: true } unless otherwise specified.
includes: [propertyHelper.js]
features: [AggregateError]
---*/

assert.sameValue(typeof AggregateError.prototype.toString, 'function');

verifyProperty(AggregateError.prototype, 'toString', {
  configurable: true,
  writable: true,
  enumerable: false,
});
