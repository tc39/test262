// Copyright (C) 2016 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.getOwnPropertyDescriptors does not see inherited properties.
es7id: pending
author: Jordan Harband
---*/

var F = function G() {};
F.prototype.a = {};
F.prototype.b = {};

var f = new F();
f.b = {}; // shadow the prototype
Object.defineProperty(f, 'c', {
  enumerable: false,
  configurable: true,
  writable: false,
  value: {}
}); // solely an own property

var result = Object.getOwnPropertyDescriptors(f);

assert.sameValue(!!result.b, true, 'b has a descriptor');
assert.sameValue(!!result.c, true, 'c has a descriptor');

assert.sameValue(result.b.enumerable, true, 'b is enumerable');
assert.sameValue(result.b.configurable, true, 'b is configurable');
assert.sameValue(result.b.writable, true, 'b is writable');
assert.sameValue(result.b.value, f.b, 'b’s value is f.b');

assert.sameValue(result.c.enumerable, false, 'c is enumerable');
assert.sameValue(result.c.configurable, true, 'c is configurable');
assert.sameValue(result.c.writable, false, 'c is writable');
assert.sameValue(result.c.value, f.c, 'c’s value is f.c');

assert.sameValue(
  Object.keys(result).length,
  Object.getOwnPropertyNames(f).length,
  'result has same number of own property names as f'
);
