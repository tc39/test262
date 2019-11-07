// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error.prototype.toString
description: >
  Property descriptor of AggregateError.prototype.toString.name
info: |
  AggregateError.prototype.toString

  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.
includes: [propertyHelper.js]
features: [AggregateError]
---*/

verifyProperty(AggregateError.prototype.toString, 'name', {
  value: 'toString',
  enumerable: false,
  writable: false,
  configurable: true
});
