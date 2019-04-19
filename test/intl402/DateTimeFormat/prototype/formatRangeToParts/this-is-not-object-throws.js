// Copyright 2019 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description:
  Throws a TypeError if this is not Object.
info:
  Intl.DateTimeFormat.prototype.formatRangeToParts ( startDate , endDate )

  1. Let dtf be this value.
  2. If Type(dtf) is not Object, throw a TypeError exception.

features: [Intl.DateTimeFormat-formatRange, Symbol]
---*/

var formatRangeToParts = Intl.DateTimeFormat.prototype.formatRangeToParts;

assert.throws(TypeError, function() {
  formatRangeToParts.call(undefined, undefined);
}, "undefined");

assert.throws(TypeError, function() {
  formatRangeToParts.call(null, null);
}, "null");

assert.throws(TypeError, function() {
  formatRangeToParts.call(42, 43);
}, "number");

assert.throws(TypeError, function() {
  formatRangeToParts.call("foo", "bar");
}, "string");

assert.throws(TypeError, function() {
  formatRangeToParts.call(false, false);
}, "false");

assert.throws(TypeError, function() {
  formatRangeToParts.call(true, true);
}, "true");

var s = Symbol('3');
assert.throws(TypeError, function() {
  formatRangeToParts.call(s, s);
}, "symbol");
