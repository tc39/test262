// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-disposablestack.prototype.move
description: Throws a TypeError if this is not an Object
info: |
  DisposableStack.prototype.move ( )

  1. Let disposableStack be the this value.
  2. Perform ? RequireInternalSlot(disposableStack, [[DisposableState]]).
  ...

  RequireInternalSlot ( O, internalSlot )

  1. If O is not an Object, throw a TypeError exception.
  ...

features: [explicit-resource-management]
---*/

assert.sameValue(typeof DisposableStack.prototype.move, 'function');

var move = DisposableStack.prototype.move;

assert.throws(TypeError, function() {
  move.call(undefined);
}, 'undefined');

assert.throws(TypeError, function() {
  move.call(null);
}, 'null');

assert.throws(TypeError, function() {
  move.call(true);
}, 'true');

assert.throws(TypeError, function() {
  move.call(false);
}, 'false');

assert.throws(TypeError, function() {
  move.call(1);
}, 'number');

assert.throws(TypeError, function() {
  move.call('object');
}, 'string');

var s = Symbol();
assert.throws(TypeError, function() {
  move.call(s);
}, 'symbol');
