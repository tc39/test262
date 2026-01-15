// Copyright (C) 2026 Garham Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number.prototype.tofixed
description: >
    If *this* value is not Number and is not an object with [[NumberData]] field, Number.prototype.toFixed throws TypeError. 
info: |
    Number.prototype.toFixed ( _fractionDigits_ )

    1. Let _x_ be ? ThisNumberValue(*this* value).

    ThisNumberValue (_value_)

    1. If _value_ is a Number, return _value_.
    2. If _value_ is an Object and _value_ has a [[NumberData]] internal slot, then
        a. Let _n_ be _value_.[[NumberData]].
        b. Assert: _n_ is a Number.
        c. Return _n_.
    3. Throw a *TypeError* exception.
---*/
var toFixed = Number.prototype.toFixed;

assert.throws(TypeError, function() {
  toFixed.call({}, 1);
}, "{}");

assert.throws(TypeError, function() {
  toFixed.call("1", 1);
}, "string");

assert.throws(TypeError, function() {
  toFixed.call(Number, 1);
}, "Number");

assert.throws(TypeError, function() {
  toFixed.call(true, 1);
}, "true");

assert.throws(TypeError, function() {
  toFixed.call(false, 1);
}, "false");

assert.throws(TypeError, function() {
  toFixed.call(null, 1);
}, "null");

assert.throws(TypeError, function() {
  toFixed.call(undefined, 1);
}, "undefined");

assert.throws(TypeError, function() {
  toFixed.call(Symbol("1"), 1);
}, "symbol");

assert.throws(TypeError, function() {
  toFixed.call([], 1);
}, "[]");