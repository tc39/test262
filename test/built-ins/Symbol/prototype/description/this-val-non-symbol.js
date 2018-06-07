// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-symbol.prototype.description
description: >
    Behavior when `this` value is an object without a [[SymbolData]] internal
    slot.
info: |
    1. Let s be the this value.
    2. Let sym be ? thisSymbolValue(s).
    3. Return sym.[[Description]].
features: [Symbol.prototype.description]
---*/

assert.throws(TypeError, function() {
  Symbol.prototype.description.call(null);
});

assert.throws(TypeError, function() {
  Symbol.prototype.description.call(123);
});

assert.throws(TypeError, function() {
  Symbol.prototype.description.call('test');
});

assert.throws(TypeError, function() {
  Symbol.prototype.description.call(true);
});

assert.throws(TypeError, function() {
  Symbol.prototype.description.call(undefined);
});

assert.throws(TypeError, function() {
  Symbol.prototype.description.call(new Proxy({}, {}));
});

assert.throws(TypeError, function() {
  Symbol.prototype.description.call({});
});
