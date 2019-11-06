// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-aggregate-error.prototype.toString
description: >
  Property descriptor of AggregateError.prototype.toString
info: |
  AggregateError.prototype.toString ( )

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
features: [AggregateError, Symbol]
---*/

var method = AggregateError.prototype.toString;

assert.throws(TypeError, () => {
  method.call(undefined);
}, 'undefined');

assert.throws(TypeError, () => {
  method.call(null);
}, 'null');

assert.throws(TypeError, () => {
  method.call(false);
}, 'false');

assert.throws(TypeError, () => {
  method.call(true);
}, 'true');

assert.throws(TypeError, () => {
  method.call(42);
}, 'number');

assert.throws(TypeError, () => {
  method.call('string');
}, 'string');

var s = Symbol();
assert.throws(TypeError, () => {
  method.call(s);
}, 'symbol');
