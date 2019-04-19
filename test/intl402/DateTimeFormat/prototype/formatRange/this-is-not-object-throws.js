// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description:
  Throws a TypeError if this is not Object.
info:
  Intl.DateTimeFormat.prototype.formatRange ( startDate , endDate )

  1. Let dtf be this value.
  2. If Type(dtf) is not Object, throw a TypeError exception.

features: [Intl.DateTimeFormat-formatRange, Symbol]
---*/

var formatRange = Intl.DateTimeFormat.prototype.formatRange;

assert.throws(TypeError, function() {
  formatRange.call(undefined, undefined);
}, "undefined");

assert.throws(TypeError, function() {
  formatRange.call(null, null);
}, "null");

assert.throws(TypeError, function() {
  formatRange.call(42, 43);
}, "number");

assert.throws(TypeError, function() {
  formatRange.call("foo", "bar");
}, "string");

assert.throws(TypeError, function() {
  formatRange.call(false, false);
}, "false");

assert.throws(TypeError, function() {
  formatRange.call(true, true);
}, "true");

var s = Symbol('3');
assert.throws(TypeError, function() {
  formatRange.call(s, s);
}, "symbol");
